<?php

namespace App\Mail;

use App\Models\Formating;
use App\Models\Publishing;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class PublishingSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public Publishing $publishing;


    /**
     * Create a new message instance.
     */
    public function __construct(Publishing $publishing)
    {
        $this->publishing = $publishing;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New formatting form submitted',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.NewForm',
            with: [
                'prductName' => $this->publishing->product_name,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $files = [];
        foreach ($this->publishing->doc as $file) {
            $files[] = Attachment::fromPath(storage_path('/app/public/' . $file['name']));
        }
        return $files;

        // return [
        //     Attachment::fromPath('/Users/ziop/workspace/atlas/storage/app/public/whatsapp.png'),

        // ];/Users/ziop/workspace/atlas/public/whatsapp.png
    }
}
