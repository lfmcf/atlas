<?php

namespace App\Http\Controllers;

use App\Models\Formating;
use Illuminate\Http\Request;
use App\Models\Continent;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\User;
use App\Notifications\InvoiceInitaitedForm;
use Illuminate\Support\Facades\Notification;

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
        return Inertia::render('Formatting/create', [
            'countries' => $countries
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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
        $formatting->document = $request->doc;
        $formatting->docremarks = $request->docremarks;
        $formatting->request_date = date('Y-m-d H:i:s', strtotime(Carbon::now()));
        $formatting->deadline = date('Y-m-d H:i:s', $request->deadline);
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
    public function show(Formating $formating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function editOne(Request $request)
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
            return Inertia::render('Formatting/EditOne', [
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

    public function editThree(Request $request)
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

        return Inertia::render('Formatting/EditThree', [
            'folder' => $formatting,
            'countries' => $countries
        ]);
    }

    public function confirmation(Request $request)
    {
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
        $formatting->document = $request->doc;
        $formatting->docremarks = $request->docremarks;
        //$formatting->request_date = date('Y-m-d H:i:s', strtotime(Carbon::now()));
        // $formatting->deadline = date('Y-m-d H:i:s', $request->deadline);
        $formatting->status = 'submitted';
        $formatting->adjusted_deadline = $request->adjusted_deadline;
        $formatting->adjustedDeadlineComments = $request->adjustedDeadlineComments;
        $formatting->save();

        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
        return redirect('/dashboard')->with('message', 'Your form has been successfully submitted');
    }

    public function setProgress(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'in progress';
        $formatting->save();
        return redirect('/tasks');
    }

    public function setVerify(Request $request)
    {

        $user = auth()->user();
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'to verify';
        // $formatting->audit->push((object));
        $formatting->audit = [['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message], ...$formatting->audit];
        $formatting->save();
        return back()->with('folder', $formatting);
    }

    public function deliver(Request $request)
    {

        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'delivered';
        $formatting->save();
        $user = User::where('current_team_id', 2)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
    }

    public function close(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'closed';
        $formatting->save();
        $user = User::where('current_team_id', 3)->get();
        Notification::sendNow($user, new InvoiceInitaitedForm($formatting));
    }

    public function correctshow(Request $request)
    {
        $formatting = Formating::findOrfail($request->id);
        return Inertia::render('Formatting/EditFour', [
            'folder' => $formatting,
        ]);
    }

    public function tocorrect(Request $request)
    {
        $user = auth()->user();
        $formatting = Formating::findOrfail($request->id);
        $formatting->status = 'to correct';
        if (is_array($formatting->correction)) {
            $formatting->correction = [
                ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message, 'source' => $request->source],
                ...$formatting->correction
            ];
        } else {
            $formatting->correction = [
                ['user' => $user->id, 'date' => date('Y-m-d H:i:s'), 'message' => $request->message, 'source' => $request->source]
            ];
        }

        $formatting->save();
        $Notuser = User::where('current_team_id', 3)->get();
        Notification::sendNow($Notuser, new InvoiceInitaitedForm($formatting));
        return back()->with('folder', $formatting);
    }


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
