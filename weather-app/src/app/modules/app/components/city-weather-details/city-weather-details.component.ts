import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../state/app.state';
import { Select } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-city-weather-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.scss']
})
export class CityWeatherDetailsComponent implements OnInit{
  @Select(AppState.location) location$: Observable<any> | undefined;

  public location: any = null;

  readonly unsubscribe = new Subject<void>();

  ngOnInit(): void {   
    this.location$?.pipe(takeUntil(this.unsubscribe)).subscribe((location) => {
      this.location = location;
    })
  }


}
