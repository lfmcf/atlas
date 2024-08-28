<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = ['region_name'];

    public function procedures()
    {
        return $this->belongsToMany(Procedure::class, 'region_procedure_product');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'region_procedure_product');
    }
}
