import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../data/company';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly company = COMPANY;

  readonly highlights = [
    {
      title: 'Nitrosamine Impurities',
      text: 'Dedicated portfolio and custom synthesis for global nitrosamine risk assessment.',
    },
    {
      title: 'Drug Working Standards',
      text: 'Pharmacopoeial working standards aligned to IP, EP, BP, and USP requirements.',
    },
    {
      title: 'Export Ready',
      text: `IEC registered (${COMPANY.iec}) for international supply of impurity and working standards.`,
    },
  ];
}
