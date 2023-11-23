<?php

namespace App\Http\Controllers;

use App\Models\Product_meta;
use Illuminate\Http\Request;

class ProductMetaController extends Controller
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
        $pm = Product_meta::where('region', $request->region['value'])->where('procedure', $request->procedure['value'])->first();
        $names = json_decode($pm->product);
        array_push($names, ['name' => $request->product]);
        $pm->update(['product' => $names]);
        // $pm->region = $request->region['value'];
        // $pm->procedure = $request->procedure['value'];
        //$pm->product = json_encode(['name' => $request->product]);
        $pm->save();

        return response('done', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product_meta $product_meta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product_meta $product_meta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product_meta $product_meta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product_meta $product_meta)
    {
        //
    }

    public function getProductname(Request $request)
    {

        $names = Product_meta::where('region', $request->region)->where('procedure', $request->procedure)->first();
        $products = $names->product;
        $products = json_decode($products);

        return response($products, 200);
    }
}
