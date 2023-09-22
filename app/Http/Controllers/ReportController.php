<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Formating;
use App\Models\Publishing;
use App\Models\PublishingMrp;
use App\Models\MetaData;

class ReportController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }

    public function list(Request $request)
    {
        $user = auth()->user();

        if ($request->notId) {
            $user->unreadNotifications->where('id', $request->notId)->markAsRead();
        }

        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'initiated')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'initiated')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'closed')
                ->get();
        } else if ($user->current_team_id == 2) {
            $formattings = Formating::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'closed')
                ->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'completed')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'closed')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'closed')
                ->get();
        }


        $allItems = $formattings->merge($publishing)->merge($publishingmrp);
        $sorted = $allItems->sortByDesc('updated_at');
        $sorted = $sorted->values()->all();

        return Inertia::render('Lab/List', [
            'allDemands' => $sorted
        ]);
    }

    public function task(Request $request)
    {
        $user = auth()->user();

        if ($request->notId) {
            $user->unreadNotifications->where('id', $request->notId)->markAsRead();
        }

        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'draft')
                ->orWhere('status', 'completed')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishing = Publishing::where('status', 'draft')
                ->orWhere('status', 'completed')
                ->get();

            $publishingmrp = PublishingMrp::where('status', 'draft')->get();
        } else if ($user->current_team_id == 2) {

            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishing = Publishing::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orderBy('created_at', 'desc')
                ->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();

            $publishing = Publishing::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();
            $publishingmrp = PublishingMrp::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->orderBy('created_at', 'desc')
                ->get();
        }

        $all = $publishing->merge($publishingmrp);
        $publishing = $all->sortByDesc('updated_at');
        $publishing = $publishing->values()->all();

        return Inertia::render('Lab/Task', [
            'formatting' => $formattings,
            'publishing' => $publishing
        ]);
    }


    public function getProductOrCountry(Request $request)
    {

        if ($request->product) {

            $country = MetaData::where('product', $request->product)->where('procedure', $request->procedure)
                ->get('country');
            return $country;
        } else {

            $product = MetaData::where('country', $request->country)->where('procedure', $request->procedure)
                ->get('Product');
            return $product;
        }
    }
}
