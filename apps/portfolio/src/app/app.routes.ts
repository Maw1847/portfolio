import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@portfolio/features').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('@portfolio/features').then(m => m.About),
  },
  {
    path: 'experience',
    loadComponent: () => import('@portfolio/features').then(m => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('@portfolio/features').then(m => m.Projects),
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('@portfolio/features').then(m => m.ProjectDetail),
  },
  {
    path: 'engineering',
    loadComponent: () => import('@portfolio/features').then(m => m.Engineering),
  },
  {
    path: 'contact',
    loadComponent: () => import('@portfolio/features').then(m => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
