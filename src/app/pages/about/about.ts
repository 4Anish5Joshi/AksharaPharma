import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../data/company';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly company = COMPANY;
}
