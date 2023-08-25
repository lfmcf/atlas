<?php

namespace App\Http\Controllers;

use App\Models\Publishing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MetaData;

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
        $procedure = $request->query('procedure');

        $country = $request->query('country');
        $product = $request->query('product');

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
    public function show(Publishing $publishing)
    {
        //
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
