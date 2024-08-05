<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugSubstanceManufacturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_meta_data_id',
        'substance_manufacturer'
    ];
}
