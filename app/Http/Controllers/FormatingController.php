<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Mail\FormSubmitted;
use App\Models\Formating;
use Illuminate\Http\Request;
use App\Models\Continent;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\User;
use App\Notifications\InvoiceInitaitedForm;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

class FormatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $formatting = "";

        if ($request->id) {
            $formatting = Formating::findOrfail($request->id);
            $region = $formatting->region;
        } else {
            $region = $request->query('region');
        }

        if ($region == "EU") {
            $cc = Continent::where('continent', 'europe')->first('countries');
        } else if ($region == "Asia") {
            $cc = Continent::where('continent', 'asia')->first('countries');
        } else if ($region == "GCC") {
            $cc = Continent::where('continent', 'gcc')->first('countries');
        } else if ($region == "Africa") {
            $cc = Continent::where('continent', 'africa')->first('countries');
        } else if ($region == "US") {
            $cc = Continent::where('continent', 'us')->first('countries');
        } else if ($region == "CH") {
            $cc = Continent::where('continent', 'ch')->first('countries');
        }

        $countries = json_decode($cc->countries);
        return Inertia::render('Formatting/Initiate', [
            'countries' => $countries,
            'folder' => $formatting
        ]);
    }

    public function createDupliaction(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $region = $formatting->region;

        if ($region == "EU") {
            $cc = Continent::where('continent', 'europe')->first('countries');
        } else if ($region == "Asia") {
            $cc = Continent::where('continent', 'asia')->first('countries');
        } else if ($region == "GCC") {
            $cc = Continent::where('continent', 'gcc')->first('countries');
        } else if ($region == "Africa") {
            $cc = Continent::where('continent', 'africa')->first('countries');
        } else if ($region == "US") {
            $cc = Continent::where('continent', 'us')->first('countries');
        } else if ($region == "CH") {
            $cc = Continent::where('continent', 'ch')->first('countries');
        }

        $countries = json_decode($cc->countries);

        return Inertia::render('Formatting/InitiateDuplicate', [
            'countries' => $countries,
            'folder' => $formatting
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $docs = $request->doc;

        $docs = array_filter($docs, static function ($element) {
            return gettype($element) !== 'array';
        });

        if (!empty($docs)) {
            $arr = array_map(function ($doc) {

                $myarr = [];

                if ($doc && gettype($doc) != 'string') {
                    $uploadedFile = $doc;
                    $filename = $uploadedFile->getClientOriginalName();
                    $path = Storage::putFileAs(
                        'public/documents',
                        $uploadedFile,
                        $filename
                    );
                    $myarr['name'] = $filename;
                    $myarr['link'] = asset('storage/documents/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $NewOrOldFor = Formating::find($request->id);
        $formatting = $NewOrOldFor ?: new Formating();

        if (!$NewOrOldFor) {
            // Generate the public ID
            $currentYear = date('Y');
            $publicId = DB::transaction(function () use ($currentYear) {
                $counter = DB::table('f_sequence_counters')
                    ->where('year', $currentYear)
                    ->lockForUpdate()
                    ->first();

                if ($counter) {
                    $nextNumber = $counter->last_number + 1;
                    DB::table('f_sequence_counters')
                        ->where('year', $currentYear)
                        ->update(['last_number' => $nextNumber]);
                } else {
                    $nextNumber = 1;
                    DB::table('f_sequence_counters')->insert([
                        'year' => $currentYear,
                        'last_number' => $nextNumber,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);
                }

                return 'FOR' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT) . '/' . $currentYear;
            });

            $formatting->public_id = $publicId;
        }


        $formatting->form = $request->form;
        $formatting->region = $request->region;
        $formatting->coredoc = $request->coredoc;
        $formatting->dossier_contact = $request->dossier_contact;
        $formatting->object = $request->object;
        $formatting->product_name = $request->product_name;
        $formatting->substance_name = $request->substance_name;
        $formatting->country = $request->country;
        $formatting->dossier_type = $request->dossier_type;
        $formatting->document_count = $request->document_count;
        $formatting->deficiency_letter = $request->deficiency_letter;
        $formatting->chrono = $request->chrono;
        $formatting->remarks = $request->remarks;
        if (!empty($formatting->document)) {
            $formatting->document = [...$formatting->document, ...$docs];
        } else {

            $formatting->document = $docs;
        }
        $formatting->docremarks = $request->docremarks;
        $formatting->request_date = $request->request_date;
        $formatting->deadline = $request->deadline;
        $formatting->created_by = $request->created_by;
        $formatting->car_deadline = $request->car_deadline;

        if ($request->query('type') == 'save') {
            $formatting->status = 'draft';
            $formatting->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {
            $formatting->status = 'initiated';
            $formatting->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
            SendEmailJob::dispatch($formatting, $user);
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }

    public function storeDuplication(Request $request)
    {
        $docs = $request->doc;

        $docs = array_filter($docs, static function ($element) {
            return gettype($element) !== 'array';
        });

        if (!empty($docs)) {
            $arr = array_map(function ($doc) {

                $myarr = [];

                if ($doc && gettype($doc) != 'string') {
                    $uploadedFile = $doc;
                    $filename = $uploadedFile->getClientOriginalName();
                    $path = Storage::putFileAs(
                        'public/documents',
                        $uploadedFile,
                        $filename
                    );
                    $myarr['name'] = $filename;
                    $myarr['link'] = asset('storage/documents/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $currentYear = date('Y');
        $publicId = DB::transaction(function () use ($currentYear) {
            $counter = DB::table('f_sequence_counters')
                ->where('year', $currentYear)
                ->lockForUpdate()
                ->first();

            if ($counter) {
                $nextNumber = $counter->last_number + 1;
                DB::table('f_sequence_counters')
                    ->where('year', $currentYear)
                    ->update(['last_number' => $nextNumber]);
            } else {
                $nextNumber = 1;
                DB::table('f_sequence_counters')->insert([
                    'year' => $currentYear,
                    'last_number' => $nextNumber,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }

            return 'FOR' . str_pad($nextNumber, 6, '0', STR_PAD_LEFT) . '/' . $currentYear;
        });



        $OldFolder = Formating::find($request->id);
        $formatting = new Formating();
        $formatting->public_id = $publicId;
        $formatting->form = $request->form;
        $formatting->region = $request->region;
        $formatting->coredoc = $request->coredoc;
        $formatting->dossier_contact = $request->dossier_contact;
        $formatting->object = $request->object;
        $formatting->product_name = $request->product_name;
        $formatting->substance_name = $request->substance_name;
        $formatting->country = $request->country;
        $formatting->dossier_type = $request->dossier_type;
        $formatting->document_count = $request->document_count;
        $formatting->deficiency_letter = $request->deficiency_letter;
        $formatting->chrono = $request->chrono;
        $formatting->remarks = $request->remarks;
        if (!empty($OldFolder->document)) {
            $formatting->document = [...$OldFolder->document, ...$docs];
        } else {

            $formatting->document = $docs;
        }
        $formatting->docremarks = $request->docremarks;
        $formatting->request_date = $request->request_date;
        $formatting->deadline = $request->deadline;

        $formatting->created_by = $request->created_by;
        $formatting->car_deadline = $request->car_deadline;

        if ($request->query('type') == 'save') {
            $formatting->status = 'draft';
            $formatting->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {
            $formatting->status = 'initiated';
            $formatting->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        return Inertia::render('Formatting/Show', [
            'folder' => $formatting
        ]);
    }

    /**
     * Show the form to confirm by the opr.
     */

    public function createConfirm(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $region = $formatting->region;
        $status = $formatting->status;

        if ($region == "EU") {
            $cc = Continent::where('continent', 'europe')->first('countries');
        } else if ($region == "Asia") {
            $cc = Continent::where('continent', 'asia')->first('countries');
        } else if ($region == "GCC") {
            $cc = Continent::where('continent', 'gcc')->first('countries');
        } else if ($region == "Africa") {
            $cc = Continent::where('continent', 'africa')->first('countries');
        } else if ($region == "US") {
            $cc = Continent::where('continent', 'us')->first('countries');
        } else if ($region == "CH") {
            $cc = Continent::where('continent', 'ch')->first('countries');
        }

        $countries = json_decode($cc->countries);
        if ($status == 'initiated') {
            return Inertia::render('Formatting/Confirm', [
                'folder' => $formatting,
                'countries' => $countries
            ]);
        } else if ($status == 'submitted' || $status == 'to verify') {
            return Inertia::render('Formatting/EditTwo', [
                'folder' => $formatting,
                'countries' => $countries
            ]);
        }
    }

    /**
     * Confirm the form by the opr.
     */

    public function postConfirm(Request $request)
    {
        $docs = $request->doc;
        $docs = array_filter($docs, static function ($element) {
            return gettype($element) !== 'array';
        });

        if (!empty($docs)) {
            $arr = array_map(function ($doc) {

                $myarr = [];

                if ($doc && gettype($doc) != 'string') {
                    $uploadedFile = $doc;
                    $filename = $uploadedFile->getClientOriginalName();
                    $path = Storage::putFileAs(
                        'public/documents',
                        $uploadedFile,
                        $filename
                    );
                    $myarr['name'] = $filename;
                    $myarr['link'] = asset('/storage/documents/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $formatting = Formating::findOrfail($request->id);
        $formatting->dossier_contact = $request->dossier_contact;
        $formatting->object = $request->object;
        $formatting->product_name = $request->product_name;
        $formatting->substance_name = $request->substance_name;
        $formatting->country = $request->country;
        $formatting->dossier_type = $request->dossier_type;
        $formatting->document_count = $request->document_count;
        $formatting->deficiency_letter = $request->deficiency_letter;
        $formatting->chrono = $request->chrono;
        $formatting->remarks = $request->remarks;
        if (!empty($formatting->document)) {
            $formatting->document = [...$formatting->document, ...$docs];
        } else {
            $formatting->document = $docs;
        }

        $formatting->docremarks = $request->docremarks;

        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'submitted';
        $formatting->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $formatting->adjustedDeadlineComments = $request->adjustedDeadlineComments;
        $formatting->car_deadline = $request->car_deadline;
        if ($request->car_deadline) {
            $formatting->adjusted_deadline_car = is_array($request->adjusted_deadline_car) ? $request->adjusted_deadline_car[0] : $request->adjusted_deadline_car;
        }

        $formatting->save();

        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        //Mail::to(getenv('MAIL_TO'))->send(new FormSubmitted($formatting));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function QuickpostConfirm(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'submitted';
        $formatting->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function createAudit(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $region = $formatting->region;
        $status = $formatting->status;

        if ($region == "EU") {
            $cc = Continent::where('continent', 'europe')->first('countries');
        } else if ($region == "Asia") {
            $cc = Continent::where('continent', 'asia')->first('countries');
        } else if ($region == "GCC") {
            $cc = Continent::where('continent', 'gcc')->first('countries');
        } else if ($region == "Africa") {
            $cc = Continent::where('continent', 'africa')->first('countries');
        } else if ($region == "US") {
            $cc = Continent::where('continent', 'us')->first('countries');
        } else if ($region == "CH") {
            $cc = Continent::where('continent', 'ch')->first('countries');
        }

        $countries = json_decode($cc->countries);

        return Inertia::render('Formatting/Audit', [
            'folder' => $formatting,
            'countries' => $countries
        ]);
    }

    public function postMessageAudit(Request $request)
    {
        $user = auth()->user();

        $formatting = Formating::findOrfail($request->id);
        if ($user->current_team_id == 3) {
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'to verify';
        } else {
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'submitted';
        }

        if ($formatting->audit) {
            $formatting->audit = [...$formatting->audit, ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message]];
        } else {
            $formatting->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message]];
        }
        $formatting->save();
        return back()->with('folder', $formatting);
    }

    public function postAudit(Request $request)
    {
        $currentUser = auth()->user();
        $formatting = Formating::findOrfail($request->id);

        if ($currentUser->current_team_id == 3) {
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'to verify';
            if ($formatting->audit) {
                $formatting->audit = [...$formatting->audit, $request->audit];
            } else {
                $formatting->audit = [$request->audit];
            }
            $formatting->save();
            $user = User::where('current_team_id', 2)->get();
            SendEmailJob::dispatch($formatting, $user);
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        } else {
            $docs = $request->doc;
            $docs = array_filter($docs, static function ($element) {
                return gettype($element) !== 'array';
            });
            if (!empty($docs)) {
                $arr = array_map(function ($doc) {

                    $myarr = [];

                    if ($doc && gettype($doc) != 'string') {
                        $uploadedFile = $doc;
                        $filename = $uploadedFile->getClientOriginalName();
                        $path = Storage::putFileAs(
                            'public/documents',
                            $uploadedFile,
                            $filename
                        );
                        $myarr['name'] = $filename;
                        $myarr['link'] = asset('/storage/documents/' . $filename);;
                    }
                    return $myarr;
                }, $docs);
                $docs = $arr;
            }
            $formatting = Formating::findOrfail($request->id);
            $formatting->dossier_contact = $request->dossier_contact;
            $formatting->object = $request->object;
            $formatting->product_name = $request->product_name;
            $formatting->substance_name = $request->substance_name;
            $formatting->country = $request->country;
            $formatting->dossier_type = $request->dossier_type;
            $formatting->document_count = $request->document_count;
            $formatting->deficiency_letter = $request->deficiency_letter;
            $formatting->chrono = $request->chrono;
            $formatting->remarks = $request->remarks;
            if (!empty($formatting->document)) {
                $formatting->document = [...$formatting->document, ...$docs];
            } else {
                $formatting->document = $docs;
            }
            $formatting->docremarks = $request->docremarks;
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'submitted';
            $formatting->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
            $formatting->adjustedDeadlineComments = $request->adjustedDeadlineComments;
            if ($formatting->audit) {
                $formatting->audit = [...$formatting->audit, $request->audit];
            } else {
                $formatting->audit = [$request->audit];
            }
            $formatting->save();
            $user = User::where('current_team_id', 3)->get();
            SendEmailJob::dispatch($formatting, $user);
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        }

        return redirect()->route('show-formatting', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function deliver(Request $request)
    {
        $user = auth()->user();
        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'delivered';
        if ($formatting->deliveryComment) {
            $formatting->deliveryComment = [...$formatting->deliveryComment, ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        } else {
            $formatting->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        }
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect('/list')->with('message', 'Dossier Delivery has been completed');
    }

    public function verification(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $region = $formatting->region;
        if ($region == "EU") {
            $cc = Continent::where('continent', 'europe')->first('countries');
        } else if ($region == "Asia") {
            $cc = Continent::where('continent', 'asia')->first('countries');
        } else if ($region == "GCC") {
            $cc = Continent::where('continent', 'gcc')->first('countries');
        } else if ($region == "Africa") {
            $cc = Continent::where('continent', 'africa')->first('countries');
        } else if ($region == "US") {
            $cc = Continent::where('continent', 'us')->first('countries');
        } else if ($region == "CH") {
            $cc = Continent::where('continent', 'ch')->first('countries');
        }

        $countries = json_decode($cc->countries);

        return Inertia::render('Formatting/Correct', [
            'folder' => $formatting,
            'countries' => $countries
        ]);
    }

    public function postCorrection(Request $request)
    {
        $user = auth()->user();

        $formatting = Formating::findOrfail($request->id);

        if ($user->current_team_id == 1) {
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'Correction Required';
        } else {
            $formatting->oldstatus = $formatting->status;
            $formatting->status = 'to correct';
        }

        if (is_array($formatting->correction)) {
            $formatting->correction = [...$formatting->correction, $request->correction];
        } else {
            $formatting->correction = [$request->correction];
        }

        $formatting->save();

        if ($user->current_team_id == 1) {
            $Notuser = User::where('current_team_id', 2)->get();
        } else {
            $Notuser = User::where('current_team_id', 3)->get();
        }

        Notification::sendNow($Notuser, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect()->route('show-formatting', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function accept(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'accepted';
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect('/list')->with('message', 'Formatting Request has been successfully accepted');
    }

    public function complete(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'completed';
        $formatting->save();
        $user = User::where('id', $formatting->created_by)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect('/list')->with('message', 'Formatting Request has been successfully completed');
    }

    public function close(Request $request)
    {

        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'closed';
        $formatting->save();
        $user = User::whereIn('current_team_id', [1, 3])->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/list')->with('message', 'Formatting Request has been successfully closed');
    }


    public function setProgress(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->oldstatus = $formatting->status;
        $formatting->status = 'in progress';
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        SendEmailJob::dispatch($formatting, $user);
        return redirect('tasks')->with('message', 'Request ACK has been susccessfully sent');
    }

    public function deleteFile(Request $request)
    {

        $filename = $request->docs;
        $id = $request->id;
        $folder = Formating::where('_id', $id);

        if ($folder) {
            foreach ($filename as $name) {
                $folder->pull('document', ['name' => $name]);
            }
        }

        Storage::disk('public')->delete($filename);
        return response('done', 200);
    }
}
