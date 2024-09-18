<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SwissMetaData extends Model
{
    use HasFactory;

    protected $fillable = [
        'tpa',
        'galenic_form',
        'swissmedic',
        'gemran',
        'dmf_number',
        'pmf_holder',
    ];
}
