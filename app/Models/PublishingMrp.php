<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class PublishingMrp extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'publishingMrp';
    use HasFactory;

    protected $casts = [
        'request_date' => 'datetime',
        'deadline' => 'datetime',
        'adjusted_deadline' => 'datetime',
    ];
}
