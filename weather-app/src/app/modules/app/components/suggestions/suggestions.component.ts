import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { City, CityData, CityDetails } from '../../../models/city-data';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit, OnDestroy {
  @Select(AppState.cities) cities$!: Observable<CityDetails[]>;

  public cities!: CityDetails[];

  public unsubscribe: Subject<void> = new Subject()

  ngOnInit(): void {
    this.cities$.pipe(takeUntil(this.unsubscribe)).subscribe((cities) => {
      this.cities = cities;
    })
  }

  selectedCity(city: CityDetails) {
    console.log(city);
    const newCity: City = {
      key: city.Key,
      cityName: city.LocalizedName,
      postalCode: city.PrimaryPostalCode,
      regionName: city.Region.LocalizedName,
      countryName: city.Country.LocalizedName,
      geoPosition: city.GeoPosition.Elevation.Imperial.Value,
    }
    console.log(newCity);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
