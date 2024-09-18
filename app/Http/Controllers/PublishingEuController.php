<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MetaData;
use App\Models\Region;
use App\Models\Procedure;
use App\Models\Publishing;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Product;
use App\Models\ProductFamilies;
use App\Notifications\InvoiceInitaitedForm;
use App\Mail\PublishingSubmitted;
use Illuminate\Support\Facades\Mail;
use App\Jobs\SendEmailJob;

class PublishingEuController extends Controller
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


        $meta_data = MetaData::where([
            ['invented_name', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])
            ->with([
                'trackingNumbers',
                'dosageForm',
                'excipients',
                'drugProduct.dp_manufacturers',
                'drugSubstance.ds_manufacturers',
                'indications'
            ])
            ->first();

        return Inertia::render('Publishing/Nat/Eu/CreateN', [
            'metadata' => $meta_data,
            'countries' => $country,
            'products' => $product,
            'folder' => $pub,
            // 'metapro' => $metaPro
        ]);
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

                if ($doc && gettype($doc) !== 'string') {

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
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        // $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        // $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        // $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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


    public function createEuConfirm(Request $request)
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
        ])
            ->with([
                'trackingNumbers',
                'dosageForm',
                'excipients',
                'drugProduct.dp_manufacturers',
                'drugSubstance.ds_manufacturers',
                'indications'
            ])->first();

        return Inertia::render('Publishing/Nat/Eu/Confirm', [
            'metadata' => $md,
            'countries' => $country,
            'products' => $product,
            'folder' => $pub,
        ]);
    }

    public function postEuConfirm(Request $request)
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
        // if ($request->tracking && is_array($request->tracking)) {
        //     $pub->tracking = "{$request->tracking['value']}{$request->trackingExtra}";
        // } else {
        //     $pub->tracking = "{$request->tracking}{$request->trackingExtra}";
        // }
        $pub->submission_unit = $request->submission_unit;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        // $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        // $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        // $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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
        $pub->status = 'submitted';

        $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;

        $pub->save();

        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        // Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        SendEmailJob::dispatch($pub);
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function createEuAudit(Request $request)
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

        return Inertia::render('Publishing/Nat/Eu/Audit', [
            'folder' => $pub,
            'metadata' => $md
        ]);
    }

    public function postEuAudit(Request $request)
    {
        $currentUser = auth()->user();

        $publishing = Publishing::findOrfail($request->id);

        if ($currentUser->current_team_id == 3) {
            $publishing->status = 'to verify';
            $publishing->save();
            if ($publishing->audit) {
                $publishing->audit = [...$publishing->audit, $request->audit];
            } else {
                $publishing->audit = [$request->audit];
            }
            $publishing->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($publishing));
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

            $publishing->form = $request->form;
            $publishing->region = $request->region;
            $publishing->procedure = $request->procedure;
            $publishing->product_name = $request->productName;
            $publishing->dossier_contact = $request->dossier_contact;
            $publishing->object = $request->object;
            $publishing->country = $request->country;
            $publishing->dossier_type = $request->dossier_type;
            $publishing->dossier_count = $request->dossier_count;
            $publishing->remarks = $request->remarks;
            $publishing->uuid = $request->uuid;
            $publishing->submission_type = $request->submission_type;
            $publishing->submission_mode = $request->submission_mode;
            $publishing->tracking = $request->tracking;
            $publishing->submission_unit = $request->submission_unit;
            $publishing->applicant = $request->applicant;
            $publishing->agency_code = $request->agency_code;
            $publishing->inn = $request->inn;
            $publishing->sequence = $request->sequence;
            $publishing->r_sequence = $request->r_sequence;
            $publishing->submission_description = $request->submission_description;
            $publishing->mtremarks = $request->mtremarks;
            $publishing->indication = $request->indication;
            $publishing->drug_substance = $request->drug_substance;
            $publishing->drug_product = $request->drug_product;
            $publishing->dosage_form = $request->dosage_form;
            $publishing->excipient = $request->excipient;
            if (!empty($pub->doc)) {
                $publishing->doc = [...$publishing->doc, ...$docs];
            } else {
                $publishing->doc = $docs;
            }
            $publishing->docremarks = $request->docremarks;
            $publishing->invented_name = $request->invented_name;
            $publishing->request_date = $request->request_date;
            $publishing->deadline = $request->deadline;
            $publishing->status = 'submitted';

            $publishing->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
            $publishing->adjustedDeadlineComments = $request->adjustedDeadlineComments;
            if ($publishing->audit) {
                $publishing->audit = [...$publishing->audit, $request->audit];
            } else {
                $publishing->audit = [$request->audit];
            }
            $publishing->save();
            $user = User::where('current_team_id', 3)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($publishing));
        }

        return redirect()->route('show_eu_publishing', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function show(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);

        return Inertia::render('Publishing/Nat/Eu/Show', [
            'folder' => $pub
        ]);
    }

    public function verification(Request $request)
    {
        $publishing = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Nat/Eu/Correct', [
            'folder' => $publishing,
        ]);
    }

    public function completeEuPublishing(Request $request)
    {
        $publishing = Publishing::findOrfail($request->id);
        $publishing->status = 'completed';
        $publishing->save();

        $user = User::where('current_team_id', 1)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($publishing));
        return redirect('/list')->with('message', 'Publishing Request has been successfully completed');
    }

    public function postEuCorrection(Request $request)
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

        return redirect()->route('show_eu_publishing', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
    }

    public function closeEuPublishing(Request $request)
    {
        $publishing = Publishing::findOrfail($request->id);
        $publishing->status = 'closed';
        $publishing->save();
        $user = User::whereIn('current_team_id', [2, 3])->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($publishing));
        return redirect('/list')->with('message', 'Publishing Request has been successfully closed');
    }

    public function createEuDuplication(Request $request)
    {
        $pub = Publishing::find($request->id);

        $region = $pub->region;
        $procedure = $pub->procedure;
        $country = $pub->country['value'];
        $product = $pub->product_name;

        $regionId = Region::where('region_name', $region)->firstOrFail()->id;
        $procedureId = Procedure::where('procedure_name', $procedure)->firstOrFail()->id;

        $productFamilyId = Product::where('name', $product)->firstOrFail()->product_family_id;

        $products = Product::where('product_family_id', $productFamilyId)
            ->whereHas('regions', function ($query) use ($regionId) {
                $query->where('regions.id', $regionId);
            })
            ->whereHas('procedures', function ($query) use ($procedureId) {
                $query->where('procedures.id', $procedureId);
            })
            ->pluck('name');

        $meta_data = MetaData::where([
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

        return Inertia::render('Publishing/Nat/Eu/InitiateDuplicate', [
            'metadata' => $meta_data,
            // 'countries' => $country,
            'products' => $products,
            'folder' => $pub
        ]);
    }

    public function getEuMetaData(Request $request)
    {


        $product = $request->product;
        $procedure = $request->procedure;
        $country = $request->country['value'];



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
        ])
            ->first();

        return response()->json($md);
    }

    public function newRequest(Request $request)
    {

        $procedure = $request->procedure;
        $country = $request->country['value'];


        $agencyCode = MetaData::where([
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])->first(['agencyCode', 'code']);

        return Inertia::render('Publishing/Nat/Eu/Initiate', [
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
        $pub->indication = $request->indication;
        $pub->dosage_form = $request->dosage_form;
        // $pub->excipient = $request->excipient;
        // $pub->drug_substance = $request->drug_substance;
        // $pub->drug_product = $request->drug_product;
        $pub->doc = $docs;
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

        $metaData->trackingNumbers()->create(['numbers' => $request->tracking]);
        $metaData->indications()->create(['indication' => $request->indication]);
        $metaData->dosageForm()->create(['form' => $request->dosage_form]);

        foreach ($transformedArray as &$item) {

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
