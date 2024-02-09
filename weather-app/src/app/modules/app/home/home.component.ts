import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CurrentWeatherComponent } from '../components/current-weather/current-weather.component';
import {  HttpClientModule } from '@angular/common/http';
import { TopCityListComponent } from '../components/top-city-list/top-city-list.component';
import { CurrentConditionsComponent } from '../components/current-conditions/current-conditions.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    HeaderComponent, 
    CurrentWeatherComponent, 
    HttpClientModule, 
    TopCityListComponent, 
    CurrentConditionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
