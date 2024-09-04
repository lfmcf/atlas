<?php

namespace App\Http\Controllers;

use App\Models\Product_meta;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Region;
use App\Models\Procedure;
use App\Models\ProductFamilies;

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

        $product = new Product();
        if (isset($request->product_family_)) {
            $productFamily = ProductFamilies::where('familly_name', $request->product_family_)->first();
            $product->product_family_id = $productFamily->id;
        }

        $product->name = $request->product;
        $product->save();

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


        $region = $request->input('region');
        $procedure = $request->input('procedure');
        $productFamily = $request->input('product_family');

        $regionId = Region::where('region_name', $region)->firstOrFail()->id;
        $procedureId = Procedure::where('procedure_name', $procedure)->firstOrFail()->id;

        if (isset($productFamily)) {


            $productFamilyId = ProductFamilies::where('familly_name', $productFamily)->firstOrFail()->id;

            $products = Product::where('product_family_id', $productFamilyId)
                ->whereHas('regions', function ($query) use ($regionId) {
                    $query->where('regions.id', $regionId);
                })
                ->whereHas('procedures', function ($query) use ($procedureId) {
                    $query->where('procedures.id', $procedureId);
                })
                ->pluck('name');
        } else {
            //$products = Product_meta::where('region', $request->region)->where('procedure', $request->procedure)->first();
            // $products = $names->product;
            // $products = json_decode($products);

            $products = Product::whereHas('regions', function ($query) use ($regionId) {
                $query->where('regions.id', $regionId);
            })
                ->whereHas('procedures', function ($query) use ($procedureId) {
                    $query->where('procedures.id', $procedureId);
                })
                ->pluck('name');
        }

        return response($products, 200);
    }

    public function getProductname_(Request $request)
    {
        $region = $request->input('region');

        $procedure = $request->input('procedure');
        $productFamily_ = $request->input('product_family_');


        $regionId = Region::where('region_name', $region)->firstOrFail()->id;
        $procedureId = Procedure::where('procedure_name', $procedure)->firstOrFail()->id;

        if (isset($productFamily_)) {

            $productFamilyId = ProductFamilies::where('familly_name', $productFamily_)->firstOrFail()->id;

            $products = Product::where('product_family_id', $productFamilyId)
                ->whereHas('regions', function ($query) use ($regionId) {
                    $query->where('regions.id', $regionId);
                })
                ->whereHas('procedures', function ($query) use ($procedureId) {
                    $query->where('procedures.id', $procedureId);
                })
                ->pluck('name');
        } else {
            $products = Product::whereHas('regions', function ($query) use ($regionId) {
                $query->where('regions.id', $regionId);
            })
                ->whereHas('procedures', function ($query) use ($procedureId) {
                    $query->where('procedures.id', $procedureId);
                })
                ->pluck('name');
        }



        return response($products, 200);
    }
}
