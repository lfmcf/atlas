<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaData extends Model
{
    use HasFactory;

    protected $fillable = [
        'procedure',
        'region',
        'country',
        'invented_name',
        'agencyCode',
        'uuid',
        'applicant',
        'inn',
        'code'
    ];


    public function indications()
    {
        return $this->hasMany(Indication::class, 'meta_data_id');
    }

    public function trackingNumbers()
    {
        return $this->hasMany(TrackingNumber::class, 'meta_data_id');
    }

    public function dosageForm()
    {
        return $this->hasMany(DosageForm::class, 'meta_data_id');
    }

    public function drugProduct()
    {
        return $this->hasMany(DrugProduct::class, 'meta_data_id');
    }

    public function drugProductManufacturer()
    {
        return $this->hasMany(DrugProductManufacturer::class, 'meta_data_id');
    }

    public function drugSubstance()
    {
        return $this->hasMany(drugSubstance::class, 'meta_data_id');
    }

    public function drugSubstanceManufacturer()
    {
        return $this->hasMany(DrugSubstanceManufacturer::class, 'meta_data_id');
    }

    public function excipients()
    {
        return $this->hasMany(Excipient::class, 'meta_data_id');
    }

    public function swissMetaData()
    {
        return $this->hasMany(SwissMetaData::class, 'meta_data_id');
    }
}
