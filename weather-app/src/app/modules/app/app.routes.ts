import { Route } from '@angular/router';
import { FavoriteCitiesComponent } from './components/favorite-cities/favorite-cities.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CityWeatherDetailsComponent } from './components/city-weather-details/city-weather-details.component';

export const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'favoritecities', component: FavoriteCitiesComponent},
    { path: 'cityweatherdetails', component: CityWeatherDetailsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];