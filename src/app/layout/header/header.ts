import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY } from '../../data/company';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly company = COMPANY;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About Us', exact: false },
    { path: '/products', label: 'Products', exact: false },
    { path: '/consumables', label: 'Consumables', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
