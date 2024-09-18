<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrugProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_meta_data_id',
        'drug_product'
    ];

    public function dp_manufacturers()
    {
        return $this->hasMany(DrugProductManufacturer::class);
    }
}
