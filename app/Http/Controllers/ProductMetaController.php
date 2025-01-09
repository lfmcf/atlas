<?php

namespace App\Http\Controllers;

use App\Models\MetaData;
use App\Models\Product_meta;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Region;
use App\Models\Procedure;
use App\Models\ProductFamilies;
use Illuminate\Support\Facades\DB;

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
        $region = $request->input('region');
        $procedure = $request->input('procedure');

        $regionId = Region::where('region_name', $region['value'])->firstOrFail()->id;
        $procedureId = Procedure::where('procedure_name', $procedure['value'])->firstOrFail()->id;

        $product = new Product();
        if (isset($request->product_family_)) {
            $productFamily = ProductFamilies::where('familly_name', $request->product_family_)->first();
            $product->product_family_id = $productFamily->id;
        } else {
            $product->product_family_id = 0;
        }

        $product->name = $request->product;
        $product->save();

        DB::table('region_procedure_product')->insert([
            'region_id' => $regionId,
            'procedure_id' => $procedureId,
            'product_id' => $product->id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response('done', 200);
    }



    public function getProductname(Request $request)
    {


        $region = $request->input('region');
        $procedure = $request->input('procedure');
        $country = $request->input('country');

        $products = MetaData::where('procedure', $procedure)
            ->where('country', $country)
            ->pluck('invented_name');

        // $regionId = Region::where('region_name', $region)->firstOrFail()->id;
        // $procedureId = Procedure::where('procedure_name', $procedure)->firstOrFail()->id;

        // if (isset($productFamily)) {


        //     $productFamilyId = ProductFamilies::where('familly_name', $productFamily)->firstOrFail()->id;

        //     $products = Product::where('product_family_id', $productFamilyId)
        //         ->whereHas('regions', function ($query) use ($regionId) {
        //             $query->where('regions.id', $regionId);
        //         })
        //         ->whereHas('procedures', function ($query) use ($procedureId) {
        //             $query->where('procedures.id', $procedureId);
        //         })
        //         ->pluck('name');
        // } else {

        //     $products = Product::whereHas('regions', function ($query) use ($regionId) {
        //         $query->where('regions.id', $regionId);
        //     })
        //         ->whereHas('procedures', function ($query) use ($procedureId) {
        //             $query->where('procedures.id', $procedureId);
        //         })
        //         ->pluck('name');
        // }

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
