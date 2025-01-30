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
    public string $dynamicSubject;
    public string $viewTemplate;
    public $attachments = [];

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PublishingMrp $publishingMrp)
    {
        $this->publishingMrp = $publishingMrp;
        $this->dynamicSubject = $this->getDynamicSubject();
        $this->viewTemplate = $this->getViewTemplate();
        $this->setAttachments();
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: $this->dynamicSubject,
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
            view: $this->viewTemplate,
            with: [
                'prductName' => $this->publishingMrp->product_name,
            ],
        );
    }

    public function attachments(): array
    {
        return $this->attachments;
        // $files = [];
        // foreach ($this->publishingMrp->doc as $file) {
        //     $files[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
        // }
        // return $files;

    }

    protected function getDynamicSubject(): string
    {
        if ($this->publishingMrp->status === 'initiated') {
            return 'New Publishing Form Initiated';
        } elseif ($this->publishingMrp->status === 'submitted') {
            return 'Publishing Form Submitted';
        } elseif ($this->publishingMrp->status === 'to verify') {
            return 'Publishing Form Awaiting Verification';
        }

        return 'Publishing Form Update';
    }

    protected function getViewTemplate(): string
    {
        $emailveiw = "";
        if ($this->publishingMrp->status === 'initiated') {
            $emailveiw = 'emails.InitiatedForm';
        } elseif ($this->publishingMrp->status === 'submitted') {
            $emailveiw = 'emails.NewForm';
        } elseif ($this->publishingMrp->status === 'to verify') {
            $emailveiw = 'emails.VerifyForm';
        } elseif ($this->publishingMrp->status === 'in progress') {
            $emailveiw = 'emails.AcceptedForm';
        } elseif ($this->publishingMrp->status === 'delivered') {
            $emailveiw = 'emails.DeliveredForm';
        } elseif ($this->publishingMrp->status === 'to correct') {
            $emailveiw = 'emails.CorrectForm';
        } elseif ($this->publishingMrp->status === 'completed') {
            $emailveiw = 'emails.CompletedForm';
        }
        return $emailveiw;
    }

    protected function setAttachments()
    {
        if ($this->publishingMrp->status === 'submitted') {
            foreach ($this->publishingMrp->document as $file) {
                $this->attachments[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
            }
            return $this->attachments;
        }
    }
}
