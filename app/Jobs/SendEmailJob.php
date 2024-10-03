<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\PublishingSubmitted;
use App\Mail\FormSubmitted;
use App\Mail\PublishingRmpSubmitted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

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

        $to = env('MAIL_TO');

        Log::info('MAIL_TO: ' . $to); // Debugging line to check the MAIL_TO value

        if (empty($to)) {
            // Log an error or handle the missing email recipient case
            Log::error('MAIL_TO environment variable is not set.');
            return; // Prevent sending an email with no recipient
        }

        if (empty($to)) {
            // Log an error or handle the missing email recipient case
            Log::error('MAIL_TO environment variable is not set.');
            return; // Prevent sending an email with no recipient
        }
        if ($this->pub->form == 'Formatting') {
            Mail::to($to)->send(new FormSubmitted($this->pub));
        } else if ($this->pub->form == 'Publishing' && $this->pub->procedure === 'Nationale' || $this->pub->procedure === 'Centralized') {
            Mail::to($to)->send(new PublishingSubmitted($this->pub));
        } else {
            Mail::to($to)->send(new PublishingRmpSubmitted($this->pub));
        }
    }
}
