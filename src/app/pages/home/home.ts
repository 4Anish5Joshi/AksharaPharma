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
      title: 'Nitrosamine Focus',
      text: 'Dedicated portfolio and custom synthesis for global nitrosamine risk assessment.',
    },
    {
      title: 'Full Documentation',
      text: 'Every material ships with COA, MS, NMR, TGA, and chromatographic purity data.',
    },
    {
      title: 'Regulatory Ready',
      text: 'Reference materials designed for method development, validation, and QC release.',
    },
  ];
}
