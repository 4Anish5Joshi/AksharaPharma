import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMPANY } from '../../data/company';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly company = COMPANY;
  readonly submitted = signal(false);
  readonly sentTo = signal('');
  readonly mailHref = signal('');

  form = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'Nitrosamine Impurities',
    message: '',
  };

  readonly interests = [
    'Nitrosamine Impurities',
    'Drug Impurity Standards',
    'Drug Working Standards (IP/EP/BP/USP)',
    'Analytical Services',
    'Custom Research Support',
    'Consumables',
    'Custom Synthesis',
    'General Enquiry',
  ];

  submit(event: Event): void {
    event.preventDefault();
    const formEl = event.target as HTMLFormElement;
    if (!formEl.reportValidity()) return;

    const recipient = this.recipient();
    const href = this.mailtoHref(recipient.email);
    this.sentTo.set(recipient.email);
    this.mailHref.set(href);
    this.submitted.set(true);
    window.location.href = href;
  }

  resetForm(): void {
    this.submitted.set(false);
    this.sentTo.set('');
    this.mailHref.set('');
    this.form = {
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'Nitrosamine Impurities',
      message: '',
    };
  }

  private recipient(): { email: string } {
    return this.form.interest === 'Consumables'
      ? this.company.contacts.consumables
      : this.company.contacts.impurities;
  }

  private mailtoHref(recipient: string): string {
    const body = [
      `Name: ${this.form.name.trim()}`,
      `Organization: ${this.form.organization.trim() || 'Not provided'}`,
      `Email: ${this.form.email.trim()}`,
      `Phone: ${this.form.phone.trim() || 'Not provided'}`,
      `Interest: ${this.form.interest}`,
      '',
      this.form.message.trim(),
    ].join('\n');
    const subject = `Website enquiry: ${this.form.interest} — ${this.form.name.trim()}`;
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
