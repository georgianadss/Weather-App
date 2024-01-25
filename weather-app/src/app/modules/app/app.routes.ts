import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { Route, Routes } from '@angular/router';

export const APP_ROUTE: Route[] = [
  { path: '', 
  component: HomeComponent, 
  loadChildren: () => import('./home/home.route')
},
];

export const route: Routes = APP_ROUTE;