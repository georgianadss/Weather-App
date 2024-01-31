import { Route } from '@angular/router';

export const APP_ROUTE: Route[] = [
    {
    path: '',
    loadChildren: () => import('./home/home.route').then(r => r.HOME_ROUTE),
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    },
];