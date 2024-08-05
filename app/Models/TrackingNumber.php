<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrackingNumber extends Model
{
    use HasFactory;

    protected $fillable = [
        'submission_meta_data_id',
        'number',
    ];
}
