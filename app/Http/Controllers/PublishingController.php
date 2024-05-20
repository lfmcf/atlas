<?php

namespace App\Http\Controllers;

use App\Models\Continent;
use App\Models\Publishing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MetaData;
use App\Models\MetaProduct;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Notifications\InvoiceInitaitedForm;
use App\Models\PublishingMrp;
use App\Models\Product_meta;
use Response;
use App\Mail\PublishingSubmitted;

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

        $pub = "";
        if ($request->id) {

            $pub = Publishing::find($request->id);

            if (!$pub) {
                $pub = PublishingMrp::find($request->id);
            }

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

        // $metaPro = MetaProduct::where('product', 'LIKE', '%' . $product . '%')->get();
        $findstring = explode(' ', $product);

        $metaPro = MetaProduct::where(function ($q) use ($findstring) {
            foreach ($findstring as $value) {
                $rvalue = rtrim($value, ",");
                $q->orWhere('product', 'like', "%{$rvalue}%");
            }
        })->first();


        if ($region == "EU") {
            if ($procedure == 'Nationale' || $procedure == 'Centralized') {
                $country = is_array($country) ? $country['value'] : $country;
                $md = MetaData::where([
                    ['Product', '=', $product],
                    ['procedure', '=', $procedure],
                    ['country', '=', $country]
                ])->first();

                if ($md) {
                    return Inertia::render('Publishing/Nat/CreateN', [
                        'metadata' => $md,
                        'countries' => $country,
                        'products' => $product,
                        'folder' => $pub,
                        'metapro' => $metaPro
                    ]);
                }
            } else {
                $listmd = [];
                if (!$request->id) {
                    for ($i = 0; $i < count($country); $i += 2) {
                        $md = MetaData::where([
                            ['Product', '=', $product],
                            ['procedure', '=', $procedure],
                            ['country', '=', $country[$i]['label']]
                        ])->first();
                        if ($md) {
                            array_push($listmd, $md);
                        }
                    }
                } else {
                    foreach ($pub->mt as $m) {
                        $md = MetaData::where([
                            ['Product', '=', $product],
                            ['procedure', '=', $procedure],
                            ['country', '=', $m['country']]
                        ])->first();
                        if ($md) {
                            array_push($listmd, $md);
                        }
                    }
                }

                return Inertia::render('Publishing/Rmp/Create', [
                    'metadata' => $listmd,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        } else if ($region == "CH") {
            $country = is_array($country) ? $country['value'] : $country;
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/Nat/Ch/Initiate', [
                    'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        } else if ($region == "GCC") {
            $country = is_array($country) ? $country['value'] : $country;
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/Nat/Gcc/Initiate', [
                    'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        }
    }

    public function createDuplication(Request $request)
    {
        $pub = Publishing::find($request->id);
        // if (!$pub) {
        //     $pub = PublishingMrp::find($request->id);
        // }
        $region = $pub->region;
        $procedure = $pub->procedure;

        $product = Product_meta::where('region', $region)->where('procedure', $procedure)->first(['product']);
        $product = json_decode($product['product']);

        if ($region == "EU") {

            $country = Continent::where('id', 1)->first(['countries']);
            $country = json_decode($country['countries']);

            if ($procedure == 'Nationale' || $procedure == 'Centralized') {

                return Inertia::render('Publishing/Nat/InitiateDuplicate', [
                    // 'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub
                ]);
            }
            // else {
            //     return Inertia::render('Publishing/Rmp/InitiateDuplicate', [

            //         'folder' => $pub
            //     ]);
            // }
        } else if ($region == "CH") {
            return Inertia::render('Publishing/Nat/Ch/InitiateDuplicate', [
                'folder' => $pub
            ]);
        } else if ($region == "GCC") {

            $country = Continent::where('id', 3)->first(['countries']);
            $country = json_decode($country['countries']);


            return Inertia::render('Publishing/Nat/Gcc/InitiateDuplicate', [
                'countries' => $country,
                'products' => $product,
                'folder' => $pub
            ]);
        }
    }

    public function createDuplicationRmp(Request $request)
    {

        $pub = PublishingMrp::find($request->id);
        $countries  = $request->countries;
        $listmd = [];
        foreach ($countries as $country) {
            $md = MetaData::where([
                ['Product', '=', $pub->product_name],
                ['procedure', '=', $pub->procedure],
                ['country', '=', $country]
            ])->first();
            if ($md) {
                array_push($listmd, $md);
            }
        }
        // $listmd = [];
        // $found = false;
        // foreach ($countries as $country) {
        //     foreach ($pub->mt as $m) {
        //         if (in_array($country, $m)) {
        //             array_push($listmd, collect($m));
        //             $found = true;
        //             break;
        //         } else {
        //             $found = false;
        //         }
        //     }
        //     if (!$found) {

        //         $md = MetaData::where([
        //             ['Product', '=', $pub->product_name],
        //             ['procedure', '=', $pub->procedure],
        //             ['country', '=', $country]
        //         ])->first();
        //         if ($md) {
        //             array_push($listmd, $md);
        //         }
        //     }
        // }

        // dd($listmd);

        return Inertia::render('Publishing/Rmp/InitiateDuplicate', [
            'metadata' => $listmd,
            'folder' => $pub
        ]);
    }

    public function create_(Request $request)
    {
        $region = $request->query('region');
        $procedure = $request->query('procedure');
        $country = $request->query('country');
        $product = $request->query('product');

        if ($region == "EU") {
            if ($procedure == 'Nationale' || $procedure == 'Centralized') {

                $country = is_array($country) ? $country['value'] : $country;
                $agc = MetaData::where([
                    ['country', '=', $country]
                ])->first('agencyCode');

                return Inertia::render('Publishing/Nat/Initiate', [
                    'countries' => $country,
                    'products' => $product,
                    'agc' => $agc
                ]);
            } else {

                $listmd = [];
                for ($i = 0; $i < count($country); $i += 2) {
                    $md = MetaData::where([
                        ['country', '=', $country[$i]['label']]
                    ])->first(['agencyCode', 'country']);

                    if ($md) {
                        array_push($listmd, $md);
                    }
                }

                return Inertia::render('Publishing/Rmp/Create_', [
                    'metadata' => $listmd,
                ]);
            }
        } else if ($region == "GCC") {
            $country = is_array($country) ? $country['value'] : $country;
            $agc = MetaData::where([
                ['country', '=', $country]
            ])->first('agencyCode');
            return Inertia::render('Publishing/Nat/Gcc/Initiate_', [
                'countries' => $country,
                'products' => $product,
                'agc' => $agc
            ]);
        } else if ($region == "CH") {
            $country = is_array($country) ? $country['value'] : $country;
            $agc = MetaData::where([
                ['country', '=', $country]
            ])->first('agencyCode');
            return Inertia::render('Publishing/Nat/Ch/Initiate_', [
                'countries' => $country,
                'products' => $product,
                'agc' => $agc
            ]);
        }
    }

    // public function createGcc(Request $request)
    // {
    //     $region = $request->query('region');
    //     $procedure = $request->query('procedure');
    //     $country = $request->query('country');
    //     $product = $request->query('product');

    //     $country = is_array($country) ? $country['value'] : $country;
    //     return Inertia::render('Publishing/Nat/Gcc/Initiate_', [
    //         'countries' => $country,
    //         'products' => $product,
    //         'countries' => $country,
    //     ]);
    // }

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
        // $pub->trackingExtra =  $request->trackingExtra;
        // if ($request->tracking && is_array($request->tracking)) {
        //     $pub->tracking = "{$request->tracking['value']}{$request->trackingExtra}";
        // } else {
        //     $pub->tracking = "{$request->tracking}{$request->trackingExtra}";
        // }

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

    public function storeDuplication(Request $request)
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

        $OldFolder = Publishing::find($request->id);
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
        // $pub->trackingExtra =  $request->trackingExtra;
        if ($request->tracking && is_array($request->tracking)) {
            $pub->tracking = "{$request->tracking['value']}{$request->trackingExtra}";
        } else {
            $pub->tracking = "{$request->tracking}{$request->trackingExtra}";
        }

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
        if (!empty($OldFolder->doc)) {
            $pub->doc = [...$OldFolder->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }

        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->type = $request->query('type');

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

    public function store_(Request $request)
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
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {
            $metadata = new MetaData();
            $metadata->procedure = $request->procedure;
            $metadata->country = $request->country['value'];
            $metadata->Product = $request->productName;
            $metadata->agencyCode = $request->agency_code;
            $metadata->trackingNumber = $request->tracking;
            $metadata->applicant = $request->applicant;
            $metadata->inn = $request->inn;
            $codearr = explode('-', $request->agency_code);
            $code = $codearr[0];
            $metadata->code = $code;
            $metadata->save();
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
        if (!$pub) {
            return $this->createConfirmrmp($request);
        }

        $region = $pub->region;
        $country = $pub->country;
        $product = $pub->product_name;
        $procedure = $pub->procedure;
        $country = is_array($country) ? $country['value'] : $country;

        $findstring = explode(' ', $product);
        $metaPro = MetaProduct::where(function ($q) use ($findstring) {
            foreach ($findstring as $value) {
                $rvalue = rtrim($value, ",");
                $q->orWhere('product', 'like', "%{$rvalue}%");
            }
        })->first();

        if ($region == "EU") {

            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/Nat/Confirm', [
                    'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        } else if ($region == "CH") {
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/Nat/Ch/Confirm', [
                    'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        } else if ($region == "GCC") {
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $country]
            ])->first();

            if ($md) {
                return Inertia::render('Publishing/Nat/Gcc/Confirm', [
                    'metadata' => $md,
                    'countries' => $country,
                    'products' => $product,
                    'folder' => $pub,
                    'metapro' => $metaPro
                ]);
            }
        }
    }

    public function validation(Request $request)
    {
        $publishing = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Validate', [
            'folder' => $publishing,
        ]);
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
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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
        Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function createAudit(Request $request)
    {
        $pub = "";
        $pub = Publishing::find($request->id);
        if (!$pub) {
            $pub = PublishingMrp::find($request->id);
            $product = $pub->product_name;
            $procedure = $pub->procedure;

            $listmd = [];
            for ($i = 0; $i < count($pub->mt); $i += 1) {

                $md = MetaData::where([
                    ['Product', '=', $product],
                    ['procedure', '=', $procedure],
                    ['country', '=', $pub->mt[$i]['country']]
                ])->first();
                if ($md) {
                    array_push($listmd, $md);
                }
            }
            return Inertia::render('Publishing/Rmp/Audit', [
                'folder' => $pub,
                'metadata' => $listmd
            ]);
        }

        $product = $pub->product_name;
        $procedure = $pub->procedure;
        $country = $pub->country;

        $md = MetaData::where([
            ['Product', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])->first();

        if ($pub->region == "EU") {

            return Inertia::render('Publishing/Nat/Audit', [
                'folder' => $pub,
                'metadata' => $md
            ]);
        } else if ($pub->region == "GCC") {
            return Inertia::render('Publishing/Nat/Gcc/Audit', [
                'folder' => $pub,
                'metadata' => $md
            ]);
        } else if ($pub->region == "CH") {
            return Inertia::render('Publishing/Nat/Ch/Audit', [
                'folder' => $pub
            ]);
        }
    }

    public function postAudit(Request $request)
    {
        $currentUser = auth()->user();
        $ublishing = Publishing::findOrfail($request->id);
        if ($currentUser->current_team_id == 3) {
            $ublishing->status = 'to verify';
            if ($ublishing->audit) {
                $ublishing->audit = [...$ublishing->audit, $request->audit];
            } else {
                $ublishing->audit = [$request->audit];
            }
            $ublishing->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($ublishing));
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
            $pub->manufacturer = $request->manufacturer;
            $pub->drug_substance = $request->drug_substance;
            $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
            $pub->drug_product = $request->drug_product;
            $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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

    public function QuickpostConfirm(Request $request)
    {

        $pub = Publishing::findOrfail($request->id);
        $pub->status = 'submitted';
        $pub->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function setProgress(Request $request)
    {

        $pub = Publishing::find($request->id);
        if (!$pub) {
            $pub = PublishingMrp::find($request->id);
        }
        $pub->status = 'in progress';
        $pub->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/tasks')->with('message', 'Request ACK has been susccessfully sent');
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
        $pub = Publishing::find($request->id);
        if (!$pub) {
            $pub = PublishingMrp::find($request->id);
        }
        $pub->status = 'delivered';
        if ($pub->deliveryComment) {
            $pub->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment], ...$pub->deliveryComment];
        } else {
            $pub->deliveryComment = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->comment]];
        }
        $pub->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/list')->with('message', 'Dossier Delivery has been completed');
    }

    public function verification(Request $request)
    {
        $publishing = Publishing::find($request->id);
        if (!$publishing) {
            $publishing = PublishingMrp::find($request->id);
            return Inertia::render('Publishing/Rmp/Correct', [
                'folder' => $publishing,
            ]);
        }

        if ($publishing->region == "EU") {
            return Inertia::render('Publishing/Nat/Correct', [
                'folder' => $publishing,
            ]);
        } else if ($publishing->region == "GCC") {
            return Inertia::render('Publishing/Nat/Gcc/Correct', [
                'folder' => $publishing,
            ]);
        } else if ($publishing->region == "CH") {
            return Inertia::render('Publishing/Nat/Ch/Correct', [
                'folder' => $publishing,
            ]);
        }
    }

    public function postCorrection(Request $request)
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
        if ($pub->region !== "CH") {
            return redirect()->route('show-publishing', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
        } else {
            return redirect()->route('show-publishing-nat-ch', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
        }
    }

    public function complete(Request $request)
    {
        $pub = Publishing::find($request->id);
        if (!$pub) {
            $pub = PublishingMrp::find($request->id);
        }
        $pub->status = 'completed';
        $pub->save();
        $user = User::where('current_team_id', 1)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/list')->with('message', 'Publishing Request has been successfully completed');
    }

    public function correctshow(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Nat/Correct', [
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

        return Inertia::render('Publishing/Nat/Show', [
            'folder' => $pub
        ]);
    }

    public function close(Request $request)
    {

        $pub = Publishing::find($request->id);
        if (!$pub) {
            $pub = PublishingMrp::find($request->id);
        }
        $pub->status = 'closed';
        $pub->save();
        $user = User::whereIn('current_team_id', [2, 3])->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        return redirect('/list')->with('message', 'Publishing Request has been successfully closed');
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

    public function storemrp(Request $request)
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

        $NewOrOldPub = PublishingMrp::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new PublishingMrp();

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->mt = $request->mt;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->deadline = $request->deadline;
        $pub->request_date = $request->request_date;
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

    public function storemrp_(Request $request)
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

        $NewOrOldPub = PublishingMrp::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new PublishingMrp();

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->mt = $request->mt;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->deadline = $request->deadline;
        $pub->request_date = $request->request_date;
        $pub->type = $request->query('type');

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {
            $mtArr = [];
            foreach ($request->mt as $md) {
                $codearr = explode('-', $md['agencyCode']);
                $code = $codearr[0];
                $dt = [
                    'procedure' => $request->procedure,
                    'country' => $md['country'],
                    'Product' => $request->product_name,
                    'agencyCode' => $md['agencyCode'],
                    'trackingNumber' => $md['trackingNumber'],
                    'applicant' => $md['applicant'],
                    'inn' => $md['inn'],
                    'code' => $code
                ];
                array_push($mtArr, $dt);
            }
            MetaData::insert($mtArr);
            $pub->status = 'initiated';
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }


    public function storemrpduplication(Request $request)
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

        $OldFolder = PublishingMrp::find($request->id);
        $pub = new PublishingMrp();
        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->mt = $request->mt;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($OldFolder->doc)) {
            $pub->doc = [...$OldFolder->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }

        $pub->docremarks = $request->docremarks;
        $pub->deadline = $request->deadline;
        $pub->request_date = $request->request_date;
        $pub->type = $request->query('type');

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

    public function createConfirmrmp(Request $request)
    {
        $pub = PublishingMrp::findOrfail($request->id);
        $product = $pub->product_name;
        $procedure = $pub->procedure;

        $findstring = explode(' ', $product);
        $metaPro = MetaProduct::where(function ($q) use ($findstring) {
            foreach ($findstring as $value) {
                $rvalue = rtrim($value, ",");
                $q->orWhere('product', 'like', "%{$rvalue}%");
            }
        })->first();

        $listmd = [];
        for ($i = 0; $i < count($pub->mt); $i++) {
            $md = MetaData::where([
                ['Product', '=', $product],
                ['procedure', '=', $procedure],
                ['country', '=', $pub->mt[$i]['country']]
            ])->first();
            if ($md) {
                array_push($listmd, $md);
            }
        }

        return Inertia::render('Publishing/Rmp/Confirm', [
            'folder' => $pub,
            'metadata' => $listmd,
            'metapro' => $metaPro
        ]);
    }


    // functions publishing nationale gcc

    public function storeNatGcc(Request $request)
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

        $NewOrOldPub = Publishing::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new Publishing();


        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
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
        $pub->atc = $request->atc;
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

    public function storeNatGccDuplicate(Request $request)
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

        $OldPub = Publishing::find($request->id);
        $pub = new Publishing();
        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->uuid = $request->uuid;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        if ($request->tracking && is_array($request->tracking)) {
            $pub->tracking = "{$request->tracking['value']}{$request->trackingExtra}";
        } else {
            $pub->tracking = "{$request->tracking}{$request->trackingExtra}";
        }
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
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($OldPub->doc)) {
            $pub->doc = [...$OldPub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->invented_name = $request->invented_name;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->type = $request->query('type');

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

    public function storeNatGcc_(Request $request)
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

        $NewOrOldPub = Publishing::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new Publishing();


        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
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
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {

            $metadata = new MetaData();
            $metadata->procedure = $request->procedure;
            $metadata->country = $request->country['value'];
            $metadata->Product = $request->product_name;
            $metadata->agencyCode = $request->agency_code;
            $metadata->trackingNumber = $request->tracking;
            $metadata->applicant = $request->applicant;
            $metadata->inn = $request->inn;
            $codearr = explode('-', $request->agency_code);
            $code = $codearr[0];
            $metadata->code = $code;
            $metadata->save();
            $pub->status = 'initiated';
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }

    public function confirmNatGcc(Request $request)
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

        $pub = Publishing::find($request->id);
        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
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
        $pub->atc = $request->atc;
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
        Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function auditNatGcc(Request $request)
    {
        $currentUser = auth()->user();
        $ublishing = Publishing::findOrfail($request->id);
        if ($currentUser->current_team_id == 3) {
            $ublishing->status = 'to verify';
            if ($ublishing->audit) {
                $ublishing->audit = [...$ublishing->audit, $request->audit];
            } else {
                $ublishing->audit = [$request->audit];
            }
            $ublishing->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($ublishing));
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

            $pub = Publishing::findOrfail($request->id);
            $pub->form = $request->form;
            $pub->region = $request->region;
            $pub->procedure = $request->procedure;
            $pub->product_name = $request->product_name;
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
            $pub->atc = $request->atc;
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

    // function ch form

    public function storeNatCh(Request $request)
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

        $NewOrOldPub = Publishing::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new Publishing();

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->tracking = $request->tracking;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->atc = $request->atc;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        $pub->invented_name = $request->invented_name;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->uuid = $request->uuid;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->galenic_form = $request->galenic_form;
        $pub->swissmedic = $request->swissmedic;
        $pub->galenic_name = $request->galenic_name;
        $pub->dmf = $request->dmf;
        $pub->pmf = $request->pmf;
        $pub->dmf_holder = $request->dmf_holder;
        $pub->pmf_holder = $request->pmf_holder;
        $pub->tpa = $request->tpa;
        $pub->application_type = $request->application_type;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
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

    public function storeNatCh_(Request $request)
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

        $NewOrOldPub = Publishing::find($request->id);
        $pub = $NewOrOldPub ? $NewOrOldPub : new Publishing();

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->tracking = $request->tracking;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->atc = $request->atc;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        $pub->invented_name = $request->invented_name;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->uuid = $request->uuid;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->docremarks = $request->docremarks;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->galenic_form = $request->galenic_form;
        $pub->swissmedic = $request->swissmedic;
        $pub->galenic_name = $request->galenic_name;
        $pub->dmf = $request->dmf;
        $pub->pmf = $request->pmf;
        $pub->dmf_holder = $request->dmf_holder;
        $pub->pmf_holder = $request->pmf_holder;
        $pub->tpa = $request->tpa;
        $pub->application_type = $request->application_type;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->type = $request->query('type');

        if ($request->query('type') == 'save') {
            $pub->status = 'draft';
            $pub->save();
            return redirect('/dashboard')->with('message', 'Form has been successfully saved');
        } else {

            $metadata = new MetaData();
            $metadata->procedure = $request->procedure;
            $metadata->country = $request->country['value'];
            $metadata->Product = $request->product_name;
            $metadata->agencyCode = $request->agency_code;
            $metadata->trackingNumber = $request->tracking;
            $metadata->applicant = "STALLERGENES";
            $metadata->inn = $request->inn;
            $metadata->tpa = $request->tpa;
            $metadata->galenic_form = $request->galenic_form;
            $metadata->swissmedic = $request->swissmedic;
            $metadata->gemran = $request->galenic_name;
            $metadata->dmf_number = $request->dmf;
            $metadata->pmf_holder = $request->pmf;
            $metadata->code = "CH";
            $metadata->save();

            $pub->status = 'initiated';
            $pub->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($pub));
            return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
        }
    }

    public function confirmNatCH(Request $request)
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

        $pub = Publishing::find($request->id);

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->tracking = $request->tracking;
        $pub->applicant = $request->applicant;
        $pub->agency_code = $request->agency_code;
        $pub->atc = $request->atc;
        $pub->submission_type = $request->submission_type;
        $pub->submission_mode = $request->submission_mode;
        $pub->invented_name = $request->invented_name;
        $pub->inn = $request->inn;
        $pub->sequence = $request->sequence;
        $pub->r_sequence = $request->r_sequence;
        $pub->uuid = $request->uuid;
        $pub->submission_description = $request->submission_description;
        $pub->mtremarks = $request->mtremarks;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
        $pub->drug_product = $request->drug_product;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        $pub->docremarks = $request->docremarks;
        $pub->request_date = $request->request_date;
        $pub->deadline = $request->deadline;
        $pub->galenic_form = $request->galenic_form;
        $pub->swissmedic = $request->swissmedic;
        $pub->galenic_name = $request->galenic_name;
        $pub->dmf = $request->dmf;
        $pub->pmf = $request->pmf;
        $pub->dmf_holder = $request->dmf_holder;
        $pub->pmf_holder = $request->pmf_holder;
        $pub->tpa = $request->tpa;
        $pub->application_type = $request->application_type;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }

        $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;
        $pub->status = 'submitted';
        $pub->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function auditNatCh(Request $request)
    {
        $currentUser = auth()->user();
        $ublishing = Publishing::findOrfail($request->id);
        if ($currentUser->current_team_id == 3) {
            $ublishing->status = 'to verify';
            if ($ublishing->audit) {
                $ublishing->audit = [...$ublishing->audit, $request->audit];
            } else {
                $ublishing->audit = [$request->audit];
            }
            $ublishing->save();
            $user = User::where('current_team_id', 2)->get();
            Notification::sendNow($user, new InvoiceInitaitedForm($ublishing));
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

            $pub = Publishing::findOrfail($request->id);
            $pub->form = $request->form;
            $pub->region = $request->region;
            $pub->procedure = $request->procedure;
            $pub->product_name = $request->product_name;
            $pub->dossier_contact = $request->dossier_contact;
            $pub->object = $request->object;
            $pub->country = $request->country;
            $pub->dossier_type = $request->dossier_type;
            $pub->dossier_count = $request->dossier_count;
            $pub->remarks = $request->remarks;
            $pub->tracking = $request->tracking;
            $pub->applicant = $request->applicant;
            $pub->agency_code = $request->agency_code;
            $pub->atc = $request->atc;
            $pub->submission_type = $request->submission_type;
            $pub->submission_mode = $request->submission_mode;
            $pub->invented_name = $request->invented_name;
            $pub->inn = $request->inn;
            $pub->sequence = $request->sequence;
            $pub->r_sequence = $request->r_sequence;
            $pub->uuid = $request->uuid;
            $pub->submission_description = $request->submission_description;
            $pub->mtremarks = $request->mtremarks;
            $pub->indication = $request->indication;
            $pub->manufacturer = $request->manufacturer;
            $pub->drug_substance = $request->drug_substance;
            $pub->drug_substance_manufacturer = $request->drug_substance_manufacturer;
            $pub->drug_product = $request->drug_product;
            $pub->dosage_form = $request->dosage_form;
            $pub->excipient = $request->excipient;
            $pub->docremarks = $request->docremarks;
            $pub->request_date = $request->request_date;
            $pub->deadline = $request->deadline;
            $pub->galenic_form = $request->galenic_form;
            $pub->swissmedic = $request->swissmedic;
            $pub->galenic_name = $request->galenic_name;
            $pub->dmf = $request->dmf;
            $pub->pmf = $request->pmf;
            $pub->dmf_holder = $request->dmf_holder;
            $pub->pmf_holder = $request->pmf_holder;
            $pub->tpa = $request->tpa;
            $pub->application_type = $request->application_type;
            $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
            if (!empty($pub->doc)) {
                $pub->doc = [...$pub->doc, ...$docs];
            } else {
                $pub->doc = $docs;
            }
            $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
            $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;
            $pub->docremarks = $request->docremarks;
            $pub->invented_name = $request->invented_name;

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

        return redirect()->route('show-publishing-nat-ch', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function showNatCh(Request $request)
    {
        $pub = Publishing::findOrfail($request->id);
        return Inertia::render('Publishing/Nat/Ch/Show', [
            'folder' => $pub,
        ]);
    }

    public function correctNatCh(Request $request)
    {
    }


    public function confirmmrp(Request $request)
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

        $pub = PublishingMrp::find($request->id);

        $pub->form = $request->form;
        $pub->region = $request->region;
        $pub->procedure = $request->procedure;
        $pub->product_name = $request->product_name;
        $pub->dossier_contact = $request->dossier_contact;
        $pub->object = $request->object;
        $pub->country = $request->country;
        $pub->dossier_type = $request->dossier_type;
        $pub->dossier_count = $request->dossier_count;
        $pub->remarks = $request->remarks;
        $pub->mt = $request->mt;
        $pub->indication = $request->indication;
        $pub->manufacturer = $request->manufacturer;
        $pub->drug_substance = $request->drug_substance;
        $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
        $pub->dosage_form = $request->dosage_form;
        $pub->excipient = $request->excipient;
        $pub->docremarks = $request->docremarks;
        $pub->deadline = $request->deadline;
        $pub->request_date = $request->request_date;
        $pub->type = $request->query('type');
        if (!empty($pub->doc)) {
            $pub->doc = [...$pub->doc, ...$docs];
        } else {
            $pub->doc = $docs;
        }
        $pub->adjusted_deadline = is_array($request->adjusted_deadline) ? $request->adjusted_deadline[0] : $request->adjusted_deadline;
        $pub->adjustedDeadlineComments = $request->adjustedDeadlineComments;
        $pub->status = 'submitted';
        $pub->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($pub));
        Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($pub));
        return redirect('/dashboard')->with('message', 'Form has been successfully submitted');
    }

    public function auditmrp(Request $request)
    {
        $currentUser = auth()->user();
        $pub = PublishingMrp::find($request->id);

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

            $pub->form = $request->form;
            $pub->region = $request->region;
            $pub->procedure = $request->procedure;
            $pub->product_name = $request->product_name;
            $pub->dossier_contact = $request->dossier_contact;
            $pub->object = $request->object;
            $pub->country = $request->country;
            $pub->dossier_type = $request->dossier_type;
            $pub->dossier_count = $request->dossier_count;
            $pub->remarks = $request->remarks;
            $pub->mt = $request->mt;
            $pub->indication = $request->indication;
            $pub->manufacturer = $request->manufacturer;
            $pub->drug_substance = $request->drug_substance;
            $pub->drug_product_manufacturer = $request->drug_product_manufacturer;
            $pub->dosage_form = $request->dosage_form;
            $pub->excipient = $request->excipient;
            $pub->docremarks = $request->docremarks;
            $pub->deadline = $request->deadline;
            $pub->request_date = $request->request_date;
            $pub->type = $request->query('type');
            if (!empty($pub->doc)) {
                $pub->doc = [...$pub->doc, ...$docs];
            } else {
                $pub->doc = $docs;
            }
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
        return redirect()->route('show-publishing-rmp', ['id' => $request->id])->with('message', 'Your form has been successfully submitted');
    }

    public function showmrp(Request $request)
    {
        $pub = PublishingMrp::find($request->id);
        return Inertia::render('Publishing/Rmp/Show', [
            'folder' => $pub
        ]);
    }

    public function correctmrp(Request $request)
    {
        $pub = PublishingMrp::find($request->id);
        $pub->status = 'to correct';
        if (is_array($pub->correction)) {
            $pub->correction = [...$pub->correction, $request->correction];
        } else {
            $pub->correction = [$request->correction];
        }

        $pub->save();
        $Notuser = User::where('current_team_id', 3)->get();
        Notification::sendNow($Notuser, new InvoiceInitaitedForm($pub));
        return redirect()->route('show-publishing-rmp', ['id' => $request->id])->with('message', 'Your request has been successfully submitted');
    }

    public function deleteFilePub(Request $request)
    {

        // dd(array_values($request->docs));
        // $filename = $request->file['name'];
        $filename = $request->docs;
        $id = $request->id;
        $folder = Publishing::find($id);

        if ($folder) {
            foreach ($filename as $name) {
                $folder->pull('doc', ['name' => $name]);
            }
        } else {
            $folder = PublishingMrp::find($id);
            foreach ($filename as $name) {
                $folder->pull('doc', ['name' => $name]);
            }
        }
        Storage::disk('public')->delete($filename);
        return response('done', 200);
    }

    public function getMetaData(Request $request)
    {


        $product = $request->product;
        $procedure = $request->procedure;
        $country = $request->country['value'];

        $md = MetaData::where([
            ['Product', '=', $product],
            ['procedure', '=', $procedure],
            ['country', '=', $country]
        ])->first(['agencyCode', 'uuid', 'trackingNumber', 'applicant', 'inn']);

        return Response::json($md);
    }
}
