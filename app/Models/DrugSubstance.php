<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugSubstance extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_meta_data_id',
        'substance',
    ];

    public function productMetaData()
    {
        return $this->belongsTo(ProductMetaData::class, 'product_meta_data_id');
    }
}
