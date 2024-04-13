import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // http://localhost:4200/
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'characters',
    children: [
      {
        path: 'old', // http://localhost:4200/characters
        
        loadComponent: () =>
          import('./pages/list/list.page').then((m) => m.ListPage),
      },
      {
        path: '', // http://localhost:4200/characters/signals
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/list-signal/list.page').then((m) => m.ListSignalPage),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/detail/detail.page').then((m) => m.DetailPage),
      },
    ],
  },
];
