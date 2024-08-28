<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'product_family_id'];

    public function productFamily()
    {
        return $this->belongsTo(ProductFamilies::class);
    }

    public function regions()
    {
        return $this->belongsToMany(Region::class, 'region_procedure_product');
    }

    public function procedures()
    {
        return $this->belongsToMany(Procedure::class, 'region_procedure_product');
    }
}
