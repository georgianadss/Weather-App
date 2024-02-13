import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService, TopCityList } from '../../../../services/locations.service';
import { CurrentCondition } from '../../../models/current-conditions';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { FetchCurrentConditions } from '../../../state/app.actions';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule,],
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit{
  @Select(AppState.currentConditions) currentConditions$!: Observable<CurrentCondition[]>
  public currentConditions!: CurrentCondition[];
  public topCities!: TopCityList[];
  public cityName!: string;
  // TODO: remove this after we create the dropdown 
 readonly ID: number = 264120;
 readonly unsubscribe = new Subject<void>();

 constructor(private locationService: LocationsService, 
            private store: Store,) {
 }

 ngOnInit(): void {
   this.locationService.getTopCityList().subscribe((topCities) => {
    if(!topCities) return;
    this.topCities = topCities;
   })
   this.currentConditions$.pipe(takeUntil(this.unsubscribe)).subscribe((currentConditions) => {
    this.currentConditions = currentConditions;
   })
 }

 
 selectCity(key: number, cityName: string) {
  this.cityName = cityName;
  this.store.dispatch(new FetchCurrentConditions(key));
 }
}
