import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { City } from '../../../models/city-data';
import { FetchLocation, RemoveFavoriteCity, SaveCityToFavorites } from '../../../state/app.actions';
import { CityWeatherDetailsComponent } from '../city-weather-details/city-weather-details.component';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-selected-city',
  standalone: true,
  imports: [CommonModule, CityWeatherDetailsComponent, RouterLink, RouterModule],
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.scss']
})
export class SelectedCityComponent implements OnInit {


  @Select(AppState.selectedCity) selectedCity$: Observable<City> | undefined;

  public selectedCity: City = {} as City;
  public isFavorite: boolean = false;
  public unsubscribe: Subject<void> = new Subject();


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedCity$?.pipe(takeUntil(this.unsubscribe)).subscribe((selectedCity) => {
      this.isFavorite = false;
      this.selectedCity = selectedCity;
    })
  }

  addMoreDetails(key: string) {
    this.store.dispatch(new FetchLocation(key));
  }

  saveCityToFavorites(selectedCity: City) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(new SaveCityToFavorites(selectedCity));
      return;
    }
    this.store.dispatch(new RemoveFavoriteCity(selectedCity.key));
  }
}
