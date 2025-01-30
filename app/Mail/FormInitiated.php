<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Formating;

class FormInitiated extends Mailable
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
            subject: 'New formatting form Initiated',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.InitiatedForm',
            with: [
                // 'prductName' => $this->formatting->product_name['value'],
                'formatting' => $this->formatting,
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
        return [];
    }
}
