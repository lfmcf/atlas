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
    public string $dynamicSubject;
    public string $viewTemplate;
    public $attachments = [];


    /**
     * Create a new message instance.
     */
    public function __construct(Formating $formatting)
    {
        $this->formatting = $formatting;
        // Set dynamic subject based on formatting data
        $this->dynamicSubject = $this->getDynamicSubject();

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
        // return new Content(
        //     view: 'emails.NewForm',
        //     with: [
        //         'prductName' => $this->formatting->product_name['value'],
        //     ],
        // );
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
        // foreach ($this->formatting->document as $file) {
        //     $files[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
        // }
        // return $files;
    }

    protected function getDynamicSubject(): string
    {
        if ($this->formatting->status === 'initiated') {
            return 'New Formatting Form Initiated';
        } elseif ($this->formatting->status === 'submitted') {
            return 'Formatting ' . $this->formatting->product_name['value'] . ' - ' . $this->formatting->country['value'] . ' - ' . $this->formatting->dossier_type['value'];
        } elseif ($this->formatting->status === 'to verify') {
            return 'Formatting Form Awaiting Verification';
        }

        return 'Formatting Form Update';
    }

    protected function getViewTemplate(): string
    {
        $emailveiw = "";
        if ($this->formatting->status === 'initiated') {
            $emailveiw = 'emails.InitiatedForm';
        } elseif ($this->formatting->status === 'submitted') {
            $emailveiw = 'emails.NewForm';
        } elseif ($this->formatting->status === 'to verify') {
            $emailveiw = 'emails.VerifyForm';
        } elseif ($this->formatting->status === 'in progress') {
            $emailveiw = 'emails.AcceptedForm';
        } elseif ($this->formatting->status === 'delivered') {
            $emailveiw = 'emails.DeliveredForm';
        } elseif ($this->formatting->status === 'to correct') {
            $emailveiw = 'emails.CorrectForm';
        } elseif ($this->formatting->status === 'completed') {
            $emailveiw = 'emails.CompletedForm';
        }
        return $emailveiw;
        // return $this->formatting->status === 'initiated'
        //     ? 'emails.InitiatedForm'
        //     : $this->formatting->status === 'submitted' ? 'emails.NewForm' : 'emails.VerificationForm';
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
            // $files = [];
            foreach ($this->formatting->document as $file) {
                $this->attachments[] = Attachment::fromPath(storage_path('/app/public/documents/' . $file['name']));
            }
            return $this->attachments;
        }
    }
}
