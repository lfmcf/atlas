<?php

namespace App\Mail;

use App\Models\Formating;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class FormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public Formating $formatting;


    /**
     * Create a new message instance.
     */
    public function __construct(Formating $formatting)
    {
        $this->formatting = $formatting;
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
                'prductName' => $this->formatting->product_name['value'],
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
        foreach ($this->formatting->document as $file) {
            $files[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
        }
        return $files;

        // return [
        //     Attachment::fromPath('/Users/ziop/workspace/atlas/storage/app/public/whatsapp.png'),

        // ];/Users/ziop/workspace/atlas/public/whatsapp.png
    }
}
