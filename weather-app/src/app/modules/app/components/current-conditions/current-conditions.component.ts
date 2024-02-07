import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService, TopCityList } from '../../../../services/locations.service';
import { CurrentCondition } from '../../../models/current-conditions';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit{
  public currentConditions!: CurrentCondition[];
  public topCities!: TopCityList[];
  // TODO: remove this after we create the dropdown 
 readonly ID: number = 264120;

 constructor(private locationService: LocationsService) {}

 ngOnInit(): void {
   this.locationService.getCurrentCondition(this.ID).subscribe((currentConditions) => {
    this.currentConditions = currentConditions;
   })
   this.locationService.getTopCityList().subscribe((topCities) => {
    this.topCities = topCities;
   })   
 }

 
 selectCity(key: number) {
   console.log(key)
 }
}
