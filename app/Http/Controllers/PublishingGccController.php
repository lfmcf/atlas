<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use Illuminate\Http\Request;
use App\Models\Region;
use App\Models\Procedure;
use App\Models\Continent;
use App\Models\Publishing;
use App\Models\User;
use App\Notifications\InvoiceInitaitedForm;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\MetaData;

class PublishingGccController extends Controller
{
    public function create(Request $request)
    {
        $pub = "";
        if ($request->id) {

            $pub = Publishing::find($request->id);

            $region = $pub->region;
            $procedure = $pub->procedure;
            $country = $pub->country;
            $product = $pub->product_name;
        } else {
            $region = $request->query('region');
            $procedure = $request->query('procedure');
            $country = $request->query('country');
            $product = $request->query('product');
        }

        $country = is_array($country) ? $country['value'] : $country;
        $md = MetaData::where([
            ['invented_name', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])
            ->with([
                'trackingNumbers',
                'dosageForm',
                'drugProduct.dp_manufacturers',
                'drugSubstance.ds_manufacturers',
                'excipients',
                'indications'
            ])
            ->first();

        if ($md) {
            return Inertia::render('Publishing/Nat/Gcc/Initiate', [
                'metadata' => $md,
                'countries' => $country,
                'products' => $product,
                'folder' => $pub,
            ]);
        }
    }

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

        $NewOrOldPub = Publishing::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new Publishing();


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
        $pub->atc = $request->atc;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product = $request->drug_product;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->type = $request->query('type');
        $pub->created_by = $request->created_by;

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {

            $pub->status = 'initiated';
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }

    public function createConfirm(Request $request)
    {
        $pub = Publishing::find($request->id);

        $region = $pub->region;
        $country = $pub->country;
        $product = $pub->product_name;
        $procedure = $pub->procedure;
        $country = is_array($country) ? $country['value'] : $country;

        $md = MetaData::where([
            ['invented_name', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])->with([
            'trackingNumbers',
            'dosageForm',
            'drugProduct.dp_manufacturers',
            'drugSubstance.ds_manufacturers',
            'excipients',
            'indications'
        ])->first();

        if ($md) {
            return Inertia::render('Publishing/Nat/Gcc/Confirm', [
                'metadata' => $md,
                'countries' => $country,
                'products' => $product,
                'folder' => $pub,
            ]);
        }
    }

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
                    $myarr['link'] = asset('storage/documents/' . $filename);;
                }
                return $myarr;
            }, $docs);
            $docs = $arr;
        }

        $pub = Publishing::find($request->id);
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
        $pub->atc = $request->atc;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product = $request->drug_product;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;
        $pub->status = 'submitted';
        $pub->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        SendEmailJob::dispatch($pub);
        // Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function createAudit(Request $request)
    {
        $pub = Publishing::find($request->id);

        $product = $pub->product_name;
        $procedure = $pub->procedure;
        $country = $pub->country;

        $md = MetaData::where([
            ['invented_name', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])
            ->with([
                'trackingNumbers',
                'dosageForm',
                'drugProduct.dp_manufacturers',
                'drugSubstance.ds_manufacturers',
                'excipients',
                'indications'
            ])
            ->first();

        return Inertia::render('Publishing/Nat/Gcc/Audit', [
            'folder' => $pub,
            'metadata' => $md
        ]);
    }

    public function postAudit(Request $request)
    {
        $currentUser = auth()->user();
        $pub = Publishing::findOrfail($request->id);
        if ($currentUser->current_team_id == 3) {
            $pub->status = 'to verify';
            if ($pub->audit) {
                $pub->audit = [...$pub->audit, $request->audit];
            } else {
                $pub->audit = [$request->audit];
            }
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
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
                        $myarr['link'] = asset('storage/documents/' . $filename);;
                    }
                    return $myarr;
                }, $docs);
                $docs = $arr;
            }

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
            $pub->atc = $request->atc;
            $pub->inn = $request->inn;
            $pub->sequence = $request->sequence;
            $pub->r_sequence = $request->r_sequence;
            $pub->submission_description = $request->submission_description;
            $pub->mtremarks = $request->mtremarks;
            $pub->indication = $request->indication;
            $pub->drug_substance = $request->drug_substance;
            $pub->drug_product = $request->drug_product;
            $pub->dosage_form = $request->dosage_form;
            $pub->excipient = $request->excipient;
            if (!empty($pub->doc)) {
                $pub->doc = [...$pub->doc, ...$docs];
            } else {
                $pub->doc = $docs;
            }
            $pub->docremarks = $request->docremarks;
            $pub->invented_name = $request->invented_name;
            $pub->request_date = $request->request_date;
            $pub->deadline = $request->deadline;
            $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
            $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;
            $pub->status = 'submitted';

            if ($pub->audit) {
                $pub->audit = [...$pub->audit, $request->audit];
            } else {
                $pub->audit = [$request->audit];
            }
            $pub->save();
            $user = User::where('current_team_id', 3)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        }

        return redirect()->route('show-publishing', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function verify(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);

        return Inertia::render('Publishing/Nat/Gcc/Correct', [
            'folder' => $pub,
        ]);
    }

    public function postVerify(Request $request)
    {
        $user = auth()->user();
        $pub = Publishing::findOrfail($request->id);

        $pub->status = 'to correct';
        if (is_array($pub->correction)) {
            $pub->correction = [...$pub->correction, $request->correction];
        } else {
            $pub->correction = [$request->correction];
        }

        $pub->save();
        $Notuser = User::where('current_team_id', 3)->get();
        Notification::sendNow($Notuser, new InvoiceInitaitedForm($pub));
        return redirect()->route('show-publishing', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
    }

    public function completeGccPublishing(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'completed';
        $pub->save();
        $user = User::where('current_team_id', 1)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/list')->with('message', 'Publishing Request has been successfully completed');
    }

    public function closeGccPublishing(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'closed';
        $pub->save();
        $user = User::whereIn('current_team_id', [2, 3])->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/list')->with('message', 'Publishing Request has been successfully closed');
    }

    public function newRequest(Request $request)
    {
        $procedure = $request->procedure;
        $country = $request->country['value'];


        $agencyCode = MetaData::where([
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])->first(['agencyCode', 'code']);

        return Inertia::render('Publishing/Nat/Gcc/Initiate_', [
            'agencyCode' => $agencyCode,
            'country' => $country,
        ]);
    }

    public function postNewRequest(Request $request)
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
        $pub->indication = $request->indication;
        $pub->dosage_form = $request->dosage_form;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $excipientArray = $request->excipient;
        $transformedArray = [];
        if (!empty($excipientArray))
            $transformedArray = array_map(function ($item) {
                return ['label' => $item, 'value' => $item];
            }, $excipientArray);

        $pub->excipient = $transformedArray;

        $drugSubstanceArry = $request->drug_substance;

        foreach ($drugSubstanceArry as &$item) {
            if (!empty($item['manufacturer'])) {
                $item['manufacturer'] = array_map(function ($manufacturer) {
                    return ['label' => $manufacturer, 'value' => $manufacturer];
                }, $item['manufacturer']);
            }
        }

        $pub->drug_substance = $drugSubstanceArry;

        $drugProductArry = $request->drug_product;

        foreach ($drugProductArry as &$item) {
            if (!empty($item['manufacturer'])) {
                $item['manufacturer'] = array_map(function ($manufacturer) {
                    return ['label' => $manufacturer, 'value' => $manufacturer];
                }, $item['manufacturer']);
            }
        }

        $pub->drug_product = $drugProductArry;

        $metaData = MetaData::create([
            'procedure' => $request->procedure,
            'country' =>  $request->country['value'],
            'invented_name' => $request->productName,
            'agencyCode' => $request->agency_code,
            'applicant' => $request->applicant,
            'inn' => $request->inn,
            'code' => $request->country['code'] ?? '',
        ]);
        // $metaData->procedure = $request->procedure;
        // $metaData->invented_name = $request->productName;
        // $metaData->country = $request->country['value'];
        // $metaData->agencyCode = $request->agency_code;
        // $metaData->applicant = $request->applicant;
        // $metaData->inn = $request->inn;
        // $metaData->code = $request->country['code'] ?? '';
        $metaData->trackingNumbers()->create(['numbers' => $request->tracking]);
        $metaData->indications()->create(['indication' => $request->indication]);
        $metaData->dosageForm()->create(['form' => $request->dosage_form]);
        // $metaData->excipients()->createMany($transformedArray);


        foreach ($transformedArray as &$item) {
            //$excipient = $metaData->excipients()->create(['excipient' => $item['label']]);
            $metaData->excipients()->create(['excipient' => $item['value']]);
        }

        foreach ($drugSubstanceArry as &$item) {
            $drugSubstance = $metaData->drugSubstance()->create(['substance' => $item['drug_substance']]);
            $manufacturers = array_map(function ($manufacturer) use ($drugSubstance) {
                return [
                    'drug_substance_id' => $drugSubstance->id,
                    'substance_manufacturer' => $manufacturer['value']
                ];
            }, $item['manufacturer']);

            // Insert multiple DrugSubstanceManufacturer records
            $drugSubstance->ds_manufacturers()->createMany($manufacturers);
        }



        foreach ($drugProductArry as &$item) {
            $drugProduct = $metaData->drugProduct()->create(['drug_product' => $item['drug_product']]);
            $manufacturers = array_map(function ($manufacturer) use ($drugProduct) {
                return [
                    'drug_product_id' => $drugProduct->id,
                    'product_manufacturer' => $manufacturer['value']
                ];
            }, $item['manufacturer']);

            // Insert multiple DrugProductManufacturer records
            $drugProduct->dp_manufacturers()->createMany($manufacturers);
        }

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {

            $pub->status = 'initiated';
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }
}
