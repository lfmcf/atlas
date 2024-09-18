<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\PublishingSubmitted;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $pub;

    /**
     * Create a new job instance.
     */
    public function __construct($pub)
    {
        $this->pub = $pub;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($this->pub));
    }
}
