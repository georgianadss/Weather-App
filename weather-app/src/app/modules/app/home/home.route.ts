import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";

export const HOME_ROUTE: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
