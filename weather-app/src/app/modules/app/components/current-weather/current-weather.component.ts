import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Region, LocationsService, TopCityList } from '../../../../services/locations.service';

const countryId = 'AFR';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  public regions: Region[] = [];

  public topCitiesList: TopCityList[] = [];

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    // this.locationService.getRegionCode().subscribe((regions) => {
    //   if (!regions) return;
    //   this.regions = regions;
    //   console.log(regions)
    // }),

    //   this.locationService.getCountryList(countryId).subscribe((b) => {
    //     console.log(b);
    //   }),

      this.locationService.getTopCityList().subscribe((topCitiesList) => {
        this.topCitiesList = topCitiesList;
        console.log(topCitiesList);
      })
  }
}
