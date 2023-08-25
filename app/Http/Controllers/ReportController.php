<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Formating;
use App\Models\Publishing;

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

    public function list()
    {
        $user = auth()->user();
        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'initiated')->orWhere('status', 'submitted')->get();
        } else if ($user->current_team_id == 2) {
            $formattings = Formating::where('status', 'in progress')
                ->orWhere('status', 'submitted')
                ->orWhere('status', 'to correct')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'in progress')->orWhere('status', 'to correct')->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'closed')
                ->get();
            $publishing = Publishing::where('status', 'to verify')->orWhere('status', 'delivered')->get();
        }

        $allItems = collect($formattings)->merge($publishing)->sortByDesc('created_at');

        return Inertia::render('Lab/List', [
            'allDemands' => $allItems
        ]);
    }

    public function task()
    {
        $user = auth()->user();

        if ($user->current_team_id == 1) {
            $formattings = Formating::where('status', 'draft')->get();
            $publishing = Publishing::where('status', 'draft')->get();
        } else if ($user->current_team_id == 2) {

            $formattings = Formating::where('status', 'initiated')
                ->orWhere('status', 'to verify')
                ->orWhere('status', 'delivered')
                ->get();
            $publishing = Publishing::where('status', 'initiated')->orWhere('status', 'to verify')->get();
        } else if ($user->current_team_id == 3) {
            $formattings = Formating::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->get();

            $publishing = Publishing::where('status', 'submitted')
                ->orWhere('status', 'in progress')
                ->orWhere('status', 'to correct')
                ->get();
        }

        return Inertia::render('Lab/Task', [
            'formatting' => $formattings,
            'publishing' => $publishing
        ]);
    }
}
