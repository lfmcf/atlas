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
use Illuminate\Mail\Mailables\Address;

class FormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public Formating $formatting;
    public string $dynamicSubject;
    public string $viewTemplate;
    public Address $dynamicFrom;
    public $attachments = [];


    /**
     * Create a new message instance.
     */
    public function __construct(Formating $formatting)
    {
        $this->formatting = $formatting;
        // Set dynamic subject based on formatting data
        $this->dynamicSubject = $this->getDynamicSubject();

        // Set dynamic sender address based on formatting data
        $this->dynamicFrom = $this->getDynamicFrom();

        // Choose view and data dynamically
        $this->viewTemplate = $this->getViewTemplate();

        // Optionally add attachments
        $this->setAttachments();
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            // Set the sender's address
            from: $this->dynamicFrom,
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
        return $this->attachments;
    }

    protected function getDynamicFrom(): Address
    {
        if ($this->formatting->status === 'initiated') {
            return new Address('car.test.atlas@gmail.com', 'Atlas');
        } elseif ($this->formatting->status === 'submitted' || $this->formatting->status === 'to correct' || $this->formatting->status === 'completed') {
            return new Address('opr.test.atlas@gmail.com', 'Atlas');
        } elseif ($this->formatting->status === 'to verify' || $this->formatting->status === 'in progress' || $this->formatting->status === 'delivered') {
            return new Address('support@ekemia.com', 'Atlas');
        }
        return new Address('support@ekemia.com', 'Atlas');
    }

    protected function getDynamicSubject(): string
    {
        if ($this->formatting->status === 'initiated') {
            return 'New Formatting Request' . ' - ' . $this->formatting->public_id . ' - ' . $this->formatting->status . ' - ' . $this->formatting->product_name['value'] . ' - ' . $this->formatting->country['code'] . ' - ' . $this->formatting->procedure;
        } elseif ($this->formatting->status === 'submitted' && $this->formatting->oldstatus === 'initiated') {
            return 'New Formatting Request' . ' - ' . $this->formatting->public_id . ' - ' . $this->formatting->status . ' - ' . $this->formatting->product_name['value'] . ' - ' . $this->formatting->country['code'] . ' - ' . $this->formatting->procedure;
        } elseif ($this->formatting->status === 'to verify' || $this->formatting->status === 'in progress' || $this->formatting->status === 'delivered' || $this->formatting->status === 'to correct' || $this->formatting->status === 'completed') {
            return 'Formatting Request' . ' - ' . $this->formatting->public_id . ' - ' . $this->formatting->status . ' - ' . $this->formatting->product_name['value'] . ' - ' . $this->formatting->country['code'] . ' - ' . $this->formatting->procedure;
        }
        return 'Formatting Form Update' . ' - ' . $this->formatting->status;
    }

    protected function getViewTemplate(): string
    {
        $emailveiw = "";
        if ($this->formatting->status === 'initiated') {
            $emailveiw = 'emails.formatting.InitiatedForm';
        } elseif ($this->formatting->status === 'submitted' && $this->formatting->oldstatus === 'initiated') {
            $emailveiw = 'emails.formatting.SubmittedForm';
        } elseif ($this->formatting->status === 'to verify') {
            $emailveiw = 'emails.formatting.VerifyForm';
        } elseif ($this->formatting->status === 'submitted' && $this->formatting->oldstatus === 'to verify') {
            $emailveiw = 'emails.formatting.SubmitAfterVerify';
        } else if ($this->formatting->status === 'in progress') {
            $emailveiw = 'emails.formatting.ProgressForm';
        } elseif ($this->formatting->status === 'delivered' && $this->formatting->oldstatus === 'in progress') {
            $emailveiw = 'emails.formatting.DeliveredForm';
        } elseif ($this->formatting->status === 'to correct' && $this->formatting->oldstatus === 'delivered') {
            $emailveiw = 'emails.formatting.CorrectForm';
        } elseif ($this->formatting->status === 'delivered' && $this->formatting->oldstatus === 'to correct') {
            $emailveiw = 'emails.formatting.DeliverAfterCorrect';
        } elseif ($this->formatting->status === 'completed') {
            $emailveiw = 'emails.formatting.CompletedForm';
        }
        return $emailveiw;
    }

    protected function getViewData(): array
    {
        return [
            'productName' => $this->formatting->product_name['value'] ?? 'N/A',
            'status' => $this->formatting->status,
            // Add more data as needed
        ];
    }

    protected function setAttachments()
    {
        if ($this->formatting->status === 'submitted') {

            foreach ($this->formatting->document as $file) {
                $this->attachments[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
            }
            return $this->attachments;
        }
    }
}
