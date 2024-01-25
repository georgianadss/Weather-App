import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";

export default [
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: './home', pathMatch: 'full' },
] as Route[];