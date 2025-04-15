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
use Illuminate\Mail\Mailables\Address;

class PublishingSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public Publishing $publishing;
    public string $dynamicSubject;
    public string $viewTemplate;
    public Address $dynamicFrom;
    public $attachments = [];


    /**
     * Create a new message instance.
     */
    public function __construct(Publishing $publishing)
    {
        $this->publishing = $publishing;
        $this->dynamicSubject = $this->getDynamicSubject();
        $this->viewTemplate = $this->getViewTemplate();
        $this->dynamicFrom = $this->getDynamicFrom();
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

    protected function getDynamicFrom(): Address
    {
        if ($this->publishing->status === 'initiated') {
            return new Address('car.test.atlas@gmail.com', 'Atlas');
        } elseif ($this->publishing->status === 'submitted' || $this->publishing->status === 'to correct' || $this->publishing->status === 'completed') {
            return new Address('opr.test.atlas@gmail.com', 'Atlas');
        } elseif ($this->publishing->status === 'to verify' || $this->publishing->status === 'in progress' || $this->publishing->status === 'delivered') {
            return new Address('support@ekemia.com', 'Atlas');
        }
        return new Address('support@ekemia.com', 'Atlas');
    }

    protected function getDynamicSubject(): string
    {
        if ($this->publishing->status === 'initiated') {
            return 'New Publishing Request' . ' - ' . $this->publishing->public_id . ' - ' . $this->publishing->status . ' - ' . $this->publishing->product_name . ' - ' . $this->publishing->country['code'] . ' - ' . $this->publishing->procedure;
        } elseif ($this->publishing->status === 'submitted' && $this->publishing->oldstatus === 'initiated') {
            return 'New Publishing Request' . ' - ' . $this->publishing->public_id . ' - ' . $this->publishing->status . ' - ' . $this->publishing->product_name . ' - ' . $this->publishing->country['code'] . ' - ' . $this->publishing->procedure;
        } elseif ($this->publishing->status === 'submitted' && $this->publishing->oldstatus === 'to verify') {
            return 'Publishing Request' . ' - ' . $this->publishing->public_id . ' - ' . $this->publishing->status . ' - ' . $this->publishing->product_name . ' - ' . $this->publishing->country['code'] . ' - ' . $this->publishing->procedure;
        } elseif ($this->publishing->status === 'to verify' || $this->publishing->status === 'in progress' || $this->publishing->status === 'delivered' || $this->publishing->status === 'to correct' || $this->publishing->status === 'completed') {
            return 'Publishing Request' . ' - ' . $this->publishing->public_id . ' - ' . $this->publishing->status . ' - ' . $this->publishing->product_name . ' - ' . $this->publishing->country['code'] . ' - ' . $this->publishing->procedure;
        }

        return 'Publishing Form Update' . ' - ' . $this->publishing->status;
    }

    protected function getViewTemplate(): string
    {
        $emailveiw = "";
        if ($this->publishing->status === 'initiated') {
            $emailveiw = 'emails.publishing.InitiatedForm';
        } elseif ($this->publishing->status === 'submitted' && $this->publishing->oldstatus === 'initiated') {
            $emailveiw = 'emails.publishing.SubmittedForm';
        } elseif ($this->publishing->status === 'to verify') {
            $emailveiw = 'emails.publishing.VerifyForm';
        } elseif ($this->publishing->status === 'submitted' && $this->publishing->oldstatus === 'to verify') {
            $emailveiw = 'emails.publishing.SubmitAfterVerify';
        } else if ($this->publishing->status === 'in progress') {
            $emailveiw = 'emails.publishing.ProgressForm';
        } elseif ($this->publishing->status === 'delivered' && $this->publishing->oldstatus === 'in progress') {
            $emailveiw = 'emails.publishing.DeliveredForm';
        } elseif ($this->publishing->status === 'to correct' && $this->publishing->oldstatus === 'delivered') {
            $emailveiw = 'emails.publishing.CorrectForm';
        } elseif ($this->publishing->status === 'delivered' && $this->publishing->oldstatus === 'to correct') {
            $emailveiw = 'emails.publishing.DeliverAfterCorrect';
        } elseif ($this->publishing->status === 'completed') {
            $emailveiw = 'emails.publishing.CompletedForm';
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
