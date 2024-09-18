<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Excipient extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_meta_data_id',
        'excipient',
    ];


    public function productMetaData()
    {
        return $this->belongsTo(ProductMetaData::class, 'product_meta_data_id');
    }
}
