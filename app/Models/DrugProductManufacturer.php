<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugProductManufacturer extends Model
{
    use HasFactory;

    protected $fillable = [
        'drug_product_id',
        'product_manufacturer',
    ];
}
