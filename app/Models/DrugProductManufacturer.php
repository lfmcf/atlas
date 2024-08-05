<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugProductManufacturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_meta_data_id',
        'product_manufacturer',
    ];
}
