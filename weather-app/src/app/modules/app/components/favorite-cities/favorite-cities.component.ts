import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { City } from '../../../models/city-data';
import { FetchLocation, RemoveFavoriteCity } from '../../../state/app.actions';
import { CityWeatherDetailsComponent } from '../city-weather-details/city-weather-details.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-cities',
  standalone: true,
  templateUrl: './favorite-cities.component.html',
  styleUrls: ['./favorite-cities.component.scss'],
  imports: [CommonModule, HeaderComponent, CityWeatherDetailsComponent, RouterLink, RouterModule]
})
export class FavoriteCitiesComponent implements OnInit {
  @Select(AppState.favoriteCities) favoriteCities$!: Observable<City[]>

  public favoriteCitiesList!: City[];

  readonly unsubscribe = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.favoriteCities$.pipe(takeUntil(this.unsubscribe)).subscribe((saveCityToFavorites) => {
      this.favoriteCitiesList = saveCityToFavorites;
    })
  }

  addMoreDetails(key: string) {
    this.store.dispatch(new FetchLocation(key));
  }

  removeItem(key: string) {
    this.store.dispatch(new RemoveFavoriteCity(key));
  }
}
