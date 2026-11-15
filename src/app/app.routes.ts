import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Akshara Pharmaa | Nitrosamine & Working Standards',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About Us | Akshara Pharmaa',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
    title: 'Products & Impurities | Akshara Pharmaa',
  },
  {
    path: 'consumables',
    loadComponent: () => import('./pages/consumables/consumables').then((m) => m.Consumables),
    title: 'Consumables | Akshara Pharmaa',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact Us | Akshara Pharmaa',
  },
  { path: '**', redirectTo: '' },
];
