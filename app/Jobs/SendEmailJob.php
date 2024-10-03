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
        if ($this->pub->form == 'Formatting') {
            Mail::to(getenv('MAIL_TO'))->send(new FormSubmitted($this->pub));
        } else if ($this->pub->form == 'Publishing' && $this->pub->procedure === 'Nationale' || $this->pub->procedure === 'Centralized') {
            Mail::to(getenv('MAIL_TO'))->send(new PublishingSubmitted($this->pub));
        } else {
            Mail::to(getenv('MAIL_TO'))->send(new PublishingRmpSubmitted($this->pub));
        }
    }
}
