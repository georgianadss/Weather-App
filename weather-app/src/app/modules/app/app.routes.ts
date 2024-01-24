import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { Route, Routes } from '@angular/router';

export const APP_ROUTE: Route[] = [
  { path: '', component: HeaderComponent },
  { path: '', component: LoginComponent }
];

export const route: Routes = APP_ROUTE;