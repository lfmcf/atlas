<?php

namespace App\Mail;

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
    public string $dynamicSubject;
    public string $viewTemplate;
    public $attachments = [];


    /**
     * Create a new message instance.
     */
    public function __construct(Publishing $publishing)
    {
        $this->publishing = $publishing;
        $this->dynamicSubject = $this->getDynamicSubject();
        $this->viewTemplate = $this->getViewTemplate();
        $this->setAttachments();
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->dynamicSubject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: $this->viewTemplate,
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
        return $this->attachments;
        // $files = [];
        // foreach ($this->publishing->doc as $file) {
        //     $files[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
        // }
        // return $files;

        // // return [
        // //     Attachment::fromPath('/Users/ziop/workspace/atlas/storage/app/public/whatsapp.png'),

        // ];/Users/ziop/workspace/atlas/public/whatsapp.png
    }

    protected function getDynamicSubject(): string
    {
        if ($this->publishing->status === 'initiated') {
            return 'New Publishing Form Initiated';
        } elseif ($this->publishing->status === 'submitted') {
            return 'Publishing ' . $this->publishing->product_name . ' - ' . $this->publishing->sequence . ' - ' . $this->publishing->dossier_type['value'];
        } elseif ($this->publishing->status === 'to verify') {
            return 'Publishing Form Awaiting Verification';
        }

        return 'Publishing Form Update';
    }

    protected function getViewTemplate(): string
    {
        $emailveiw = "";
        if ($this->publishing->status === 'initiated') {
            $emailveiw = 'emails.InitiatedForm';
        } elseif ($this->publishing->status === 'submitted') {
            $emailveiw = 'emails.NewPublishing';
        } elseif ($this->publishing->status === 'to verify') {
            $emailveiw = 'emails.VerifyForm';
        } elseif ($this->publishing->status === 'in progress') {
            $emailveiw = 'emails.AcceptedForm';
        } elseif ($this->publishing->status === 'delivered') {
            $emailveiw = 'emails.DeliveredForm';
        } elseif ($this->publishing->status === 'to correct') {
            $emailveiw = 'emails.CorrectForm';
        } elseif ($this->publishing->status === 'completed') {
            $emailveiw = 'emails.CompletedForm';
        }
        return $emailveiw;
    }

    protected function setAttachments()
    {
        if ($this->publishing->status === 'submitted') {

            foreach ($this->publishing->doc as $file) {
                $this->attachments[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
            }
            return $this->attachments;
        }
    }
}
