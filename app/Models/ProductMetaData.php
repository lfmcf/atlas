<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductMetaData extends Model
{
    use HasFactory;

    protected $fillable = [
        'submission_meta_data_id',
        'indication',
    ];

    public function submissionMetaData()
    {
        return $this->belongsTo(SubmissionMetaData::class);
    }

    public function dosageForm()
    {
        return $this->hasMany(DosageForm::class, 'product_meta_data_id');
    }

    public function drugProduct()
    {
        return $this->hasMany(DrugProduct::class, 'product_meta_data_id');
    }

    public function drugProductManufacturer()
    {
        return $this->hasMany(DrugProductManufacturer::class, 'product_meta_data_id');
    }

    public function drugSubstance()
    {
        return $this->hasMany(drugSubstance::class, 'product_meta_data_id');
    }

    public function drugSubstanceManufacturer()
    {
        return $this->hasMany(DrugSubstanceManufacturer::class, 'product_meta_data_id');
    }

    public function excipients()
    {
        return $this->hasMany(Excipient::class, 'product_meta_data_id');
    }
}
