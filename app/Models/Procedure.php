<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Procedure extends Model
{
    use HasFactory;

    protected $fillable = ['procedure_name'];

    public function regions()
    {
        return $this->belongsToMany(Region::class, 'region_procedure_product');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'region_procedure_product');
    }
}
