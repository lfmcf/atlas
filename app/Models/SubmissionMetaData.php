<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmissionMetaData extends Model
{
    use HasFactory;

    protected $fillable = [
        'procedure',
        'country',
        'product',
        'agencyCode',
        'uuid',
        'applicant',
        'inn',
        'tpa',
        'galenic_form',
        'swissmedic',
        'gemran',
        'dmf_number',
        'pmf_holder',
        'code',
    ];

    public function productMetaData()
    {
        return $this->hasOne(ProductMetaData::class, 'submission_meta_data_id');
    }

    public function trackingNumbers()
    {
        return $this->hasMany(TrackingNumber::class, 'submission_meta_data_id');
    }
}
