import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { City, CityDetails } from '../../../models/city-data';
import { SelectedCity } from '../../../state/app.actions';
import { NotificationService } from '../../../../services/notification.service';

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

  public cityKey!: string;

  public unsubscribe: Subject<void> = new Subject()


  constructor(private store: Store, private notify: NotificationService,) { }



  ngOnInit(): void {
    this.cities$.pipe(takeUntil(this.unsubscribe)).subscribe((cities) => {
      this.cities = cities;
    });
  }

  selectedCity(city: CityDetails) {
    const cities: City[] = this.store.selectSnapshot(AppState.favoriteCities) ?? [];
    if (cities.length >= 9) {
      this.notify.warning('You reached the maximum number of favorite cities');
      return;
    }

    const cityExists = cities.some(favCity => favCity.key === city.Key);
    if (cityExists) {
      this.notify.fail('This city is already in your list');
      return;
    }

    const newCity: City = {
      key: city.Key,
      cityName: city.LocalizedName,
      postalCode: city.PrimaryPostalCode,
      regionName: city.Region.LocalizedName,
      countryName: city.Country.LocalizedName,
      timeZone: city.TimeZone.GmtOffset,
      geoPosition: city.GeoPosition.Elevation.Imperial.Value,
    }
    this.cityKey = city.Key;
    this.store.dispatch(new SelectedCity(newCity));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
