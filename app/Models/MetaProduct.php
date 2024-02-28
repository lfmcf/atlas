<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaProduct extends Model
{
    use HasFactory;

    protected $casts = [
        'indication' => 'array', 'substance' => 'array', 'ds_manufacturer' => 'array', 'drug_product' => 'array',
        'dp_manufacturer' => 'array', 'dosage' => 'array', 'excipient' => 'array'
    ];
}
