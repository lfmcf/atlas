<?php

namespace App\Mail;

use App\Models\PublishingMrp;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class PublishingRmpSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public PublishingMrp $publishingMrp;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PublishingMrp $publishingMrp)
    {
        $this->publishingMrp = $publishingMrp;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'New publishing form submitted',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.NewForm',
            with: [
                'prductName' => $this->publishingMrp->product_name,
            ],
        );
    }

    public function attachments(): array
    {
        $files = [];
        foreach ($this->publishingMrp->doc as $file) {
            $files[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
        }
        return $files;

        // return [
        //     Attachment::fromPath('/Users/ziop/workspace/atlas/storage/app/public/whatsapp.png'),

        // ];/Users/ziop/workspace/atlas/public/whatsapp.png
    }
}
