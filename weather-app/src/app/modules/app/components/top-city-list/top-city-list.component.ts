import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService, TopCityList } from '../../../../services/locations.service';

@Component({
  selector: 'app-top-city-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './top-city-list.component.html',
  styleUrls: ['./top-city-list.component.scss']
})
export class TopCityListComponent implements OnInit{
  public topCitiesList: TopCityList[] = [];

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    this.locationService.getTopCityList().subscribe((topCitiesList) => {
      this.topCitiesList = topCitiesList;
      console.log(topCitiesList);
    })
  }
}
