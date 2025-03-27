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
use App\Mail\FormInitiated;
use App\Mail\FormVerify;
use App\Mail\PublishingRmpSubmitted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $folder;
    public $user;

    /**
     * Create a new job instance.
     */
    public function __construct($folder, $user)
    {
        $this->folder = $folder;
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        // $to = env('MAIL_TO', 'eps@ekemia.com');

        if ($this->folder->form == 'Formatting') {

            Mail::to('support@ekemia.com')->send(new FormSubmitted($this->folder));
            // if ($this->folder->status === 'submitted' || $this->folder->status === 'to correct') {
            //     Mail::to('laftim.moncef@gmail.com')->send(new FormSubmitted($this->folder));
            //     } else {
            //         foreach ($this->user as $user) {
            //             Mail::to($user->email)->send(new FormSubmitted($this->folder));
            //         }
            // }
        } else if ($this->folder->form == 'Publishing') {

            Mail::to('support@ekemia.com')->send(new PublishingSubmitted($this->folder));
        }
    }
}
