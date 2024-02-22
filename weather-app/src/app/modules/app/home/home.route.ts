import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "../components/login/login.component";
import { FavoriteCitiesComponent } from "../components/favorite-cities/favorite-cities.component";


export const HOME_ROUTE: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'favoritecities', component: FavoriteCitiesComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
