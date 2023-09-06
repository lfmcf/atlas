<?php

namespace App\Http\Controllers;

use App\Models\Publishing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MetaData;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Notifications\InvoiceInitaitedForm;

class PublishingController extends Controller
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

        $procedure = $request->query('procedure');

        $country = $request->query('country');
        $product = $request->query('product');
        if ($region == "EU") {
            if ($procedure == 'Nationale' || $procedure == 'Centralized') {
                $md = MetaData::where([
                    ['Product', '=', $product],
                    ['procedure', '=', $procedure],
                    ['country', '=', $country['value']]
                ])->first();
                if ($md) {
                    return Inertia::render('Publishing/CreateN', [
                        'metadata' => $md,
                        'countries' => $country['value'],
                        'products' => $product
                    ]);
                }
            } else {
                $listmd = [];
                for ($i = 0; $i < count($country); $i += 2) {
                    // dd($country[$i]['label']);
                    $md = MetaData::where([
                        ['Product', '=', $product],
                        ['procedure', '=', $procedure],
                        ['country', '=', $country[$i]['label']]
                    ])->first();
                    if ($md) {
                        array_push($listmd, $md);
                    }
                }
                return Inertia::render('Publishing/Create', [
                    'metadata' => $listmd,
                ]);
            }
        } else if ($region == "CH") {

            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country['value']]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/createch', [
                    'metadata' => $md,
                    'countries' => $country['value'],
                    'products' => $product
                ]);
            }
        } else if ($region == "GCC") {
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country['value']]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/creategcc', [
                    'metadata' => $md,
                    'countries' => $country['value'],
                    'products' => $product
                ]);
            }
        }
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
                    $myarr['link'] = asset('storage/documents/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $pub = new Publishing();
        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->productName;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->uuid = $request->uuid;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        $pub->tracking = $request->tracking;
        $pub->submission_unit = $request->submission_unit;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        $pub->doc = $docs;
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->status = 'initiated';
        $pub->type = $request->query('type');
        $pub->save();

        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
    }

    public function validation(Request $request)
    {
        $publishing = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Validate', [
            'folder' => $publishing
        ]);
    }

    public function validationStore(Request $request)
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

        $pub = Publishing::findOrfail($request->id);
        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->productName;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->uuid = $request->uuid;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        $pub->tracking = $request->tracking;
        $pub->submission_unit = $request->submission_unit;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($docs)) {
            $pub->document = [...$pub->document, $docs];
        }
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->status = 'submitted';

        $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;

        $pub->save();

        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        //Mail::to(getenv('MAIL_TO'))->send(new FormSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
    }

    public function audit(Request $request)
    {
        $pub = Publishing::findOrFail($request->id);

        return Inertia::render('Publishing/Audit', [
            'folder' => $pub
        ]);
    }

    public function setProgress(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'in progress';
        $pub->save();
        return redirect('/tasks');
    }

    public function setVerify(Request $request)
    {
        $user = auth()->user();
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'to verify';
        // $formatting->audit->push((object));
        if ($pub->audit) {
            $pub->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message], ...$pub->audit];
        } else {
            $pub->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message]];
        }

        $pub->save();
        return back()->with('folder', $pub);
    }

    public function deliver(Request $request)
    {
        $user = auth()->user();
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'delivered';
        if ($pub->deliveryComment) {
            $pub->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment], ...$pub->deliveryComment];
        } else {
            $pub->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        }
        $pub->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
    }

    public function correctshow(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Correct', [
            'folder' => $pub,
        ]);
    }

    public function tocorrect(Request $request)
    {
        $user = auth()->user();
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'to correct';
        if (is_array($pub->correction)) {
            $pub->correction = [
                ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message, 'source' => $request->source],
                ...$pub->correction
            ];
        } else {
            $pub->correction = [
                ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message, 'source' => $request->source]
            ];
        }

        $pub->save();
        $Notuser = User::where('current_team_id', 3)->get();
        Notification::sendNow($Notuser, new InvoiceInitaitedForm($pub));
        return back()->with('folder', $pub);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Show', [
            'folder' => $pub
        ]);
    }

    public function close(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'closed';
        $pub->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publishing $publishing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publishing $publishing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publishing $publishing)
    {
        //
    }
}
