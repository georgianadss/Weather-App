import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentCondition } from '../modules/models/current-conditions';
import { TopCityList } from '../modules/models/top-city-list';
import { City, CityDetails } from '../modules/models/city-data';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {
    selectedCity(city: City) {
        throw new Error("Method not implemented.");
    }
  private apiUrl = 'http://dataservice.accuweather.com';

  public readonly API_KEY: string = 'PqyStkK8gFLWdkDb6VICqxGZp2bEby8T';

  constructor(private http: HttpClient) { };

  getTopCityList(): Observable<TopCityList[]>{
    // const headers = new HttpHeaders().set('apiKey', this.API_KEY);
    return this.http.get<TopCityList[]>(`${this.apiUrl}/locations/v1/topcities/50?apikey=${this.API_KEY}`);
}

  getCurrentCondition(id: number): Observable<CurrentCondition[]> {
    return this.http.get<CurrentCondition[]>(`${this.apiUrl}/currentconditions/v1/${id}?apikey=${this.API_KEY}`);
  }

  getCityData(city: string): Observable<CityDetails[]> {
    return this.http.get<CityDetails[]>(`${this.apiUrl}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${city}`);
  } 

  // getCityData(city: string): Observable<CityData[]> {
  //   return this.http.get<CityData[]>(`${this.apiUrl}/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${city}`);
  // } 
}
