import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ErrorsComponent } from './components/errors/errors.component';


export const routes: Routes = [
    { path: '', component: HeaderComponent, pathMatch: 'full', },
];
