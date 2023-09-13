<?php

namespace App\Http\Controllers;

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
        $region = $request->query('region');
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
            'countries' => $countries
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $docs = $request->doc;

        if (!empty($docs)) {
            $arr = array_map(function ($doc) {

                $myarr = [];

                if ($doc && gettype($doc) != 'string') {
                    $uploadedFile = $doc;
                    $filename = $uploadedFile->getClientOriginalName();
                    $path = Storage::putFileAs(
                        'public',
                        $uploadedFile,
                        $filename
                    );
                    $myarr['name'] = $filename;
                    $myarr['link'] = asset('storage/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $formatting = new Formating();
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
        $formatting->document = $docs;
        $formatting->docremarks = $request->docremarks;
        $formatting->request_date = $request->request_date;
        $formatting->deadline = $request->deadline;
        $formatting->status = 'initiated';
        $formatting->created_by = $request->created_by;
        $formatting->save();

        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
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
     * Show the form for editing the specified resource.
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

    public function postConfirm(Request $request)
    {
        $docs = $request->doc;

        if (!empty($docs)) {
            $arr = array_map(function ($doc) {

                $myarr = [];

                if ($doc && gettype($doc) != 'string') {
                    $uploadedFile = $doc;
                    $filename = $uploadedFile->getClientOriginalName();
                    $path = Storage::putFileAs(
                        'public',
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
        if (!empty($docs)) {
            $formatting->document = [...$formatting->document, $docs];
        }

        $formatting->docremarks = $request->docremarks;
        //$formatting->request_date = date('Y-m-d H:i:s', strtotime(Carbon::now()));
        // $formatting->deadline = date('Y-m-d H:i:s', $request->deadline);
        $formatting->status = 'submitted';
        $formatting->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $formatting->adjustedDeadlineComments = $request->adjustedDeadlineComments;

        $formatting->save();

        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        //Mail::to(getenv('MAIL_TO'))->send(new FormSubmitted($formatting));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
    }

    public function QuickpostConfirm(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'submitted';
        $formatting->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
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
            $formatting->status = 'to verify';
        } else {
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
            $formatting->status = 'to verify';
            if ($formatting->audit) {
                $formatting->audit = [...$formatting->audit, $request->audit];
            } else {
                $formatting->audit = [$request->audit];
            }
            $formatting->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        } else {
            $docs = $request->doc;

            if (!empty($docs)) {
                $arr = array_map(function ($doc) {

                    $myarr = [];

                    if ($doc && gettype($doc) != 'string') {
                        $uploadedFile = $doc;
                        $filename = $uploadedFile->getClientOriginalName();
                        $path = Storage::putFileAs(
                            'public',
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
            if (!empty($docs)) {
                $formatting->document = [...$formatting->document, $docs];
            }
            $formatting->docremarks = $request->docremarks;
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
            Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        }

        return redirect()->route('show-formatting', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function deliver(Request $request)
    {
        $user = auth()->user();
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'delivered';
        if ($formatting->deliveryComment) {
            $formatting->deliveryComment = [...$formatting->deliveryComment, ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        } else {
            $formatting->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        }
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/list')->with('message', 'delivery has been completed, a notification has been sent');
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
        $formatting->status = 'to correct';
        if (is_array($formatting->correction)) {
            $formatting->correction = [...$formatting->correction, $request->correction];
        } else {
            $formatting->correction = [$request->correction];
        }

        $formatting->save();
        $Notuser = User::where('current_team_id', 3)->get();
        Notification::sendNow($Notuser, new InvoiceInitaitedForm($formatting));
        return redirect()->route('show-formatting', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
    }

    public function close(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'closed';
        $formatting->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/list')->with('message', 'Formatting ' . $formatting->product_name['value'] . ' has been closed successfully');
    }


    public function setProgress(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'in progress';
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/tasks')->with('message', 'work is in progress, a notification has been sent');
    }

    // public function setVerify(Request $request)
    // {

    //     $user = auth()->user();
    //     $formatting = Formating::findOrfail($request->id);
    //     $formatting->status = 'to verify';

    //     if ($formatting->audit) {
    //         $formatting->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message], ...$formatting->audit];
    //     } else {
    //         $formatting->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message]];
    //     }

    //     $formatting->save();
    //     return back()->with('folder', $formatting);
    // }








    public function edit(Formating $formating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Formating $formating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formating $formating)
    {
        //
    }
}
