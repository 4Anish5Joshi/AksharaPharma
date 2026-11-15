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
    'Working Standards',
    'Custom Synthesis',
    'General Enquiry',
  ];

  submit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }

  resetForm(): void {
    this.submitted.set(false);
    this.form = {
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'Nitrosamine Impurities',
      message: '',
    };
  }
}
