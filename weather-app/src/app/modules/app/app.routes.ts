import { Route } from '@angular/router';
import { FavoriteCitiesComponent } from './components/favorite-cities/favorite-cities.component';

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

    {
        path: 'favoritecities',
        pathMatch: 'full',
        component: FavoriteCitiesComponent,
        // loadComponent: () => import('./components/favorite-cities/favorite-cities.component').then(mod => mod.FavoriteCitiesComponent),
    }
];