import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService, TopCityList } from '../../../../services/locations.service';

const countryId = 'AFR';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  public topCitiesList: TopCityList[] = [];

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    this.locationService.getTopCityList().subscribe((topCitiesList) => {
      this.topCitiesList = topCitiesList;
      console.log(topCitiesList);
    })
  }
}
