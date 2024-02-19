import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentCondition } from '../modules/models/current-conditions';
import { TopCityList } from '../modules/models/top-city-list';
import { CityData } from '../modules/models/city-data';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private apiUrl = 'http://dataservice.accuweather.com';

  public readonly API_KEY: string = 'MaBdG9cXOg0g3aABJdNxIZo5wTjmqIuK';

  constructor(private http: HttpClient) { };

  getTopCityList(): Observable<TopCityList[]>{
    // const headers = new HttpHeaders().set('apiKey', this.API_KEY);
    return this.http.get<TopCityList[]>(`${this.apiUrl}/locations/v1/topcities/50?apikey=${this.API_KEY}`);
}

  getCurrentCondition(id: number): Observable<CurrentCondition[]> {
    return this.http.get<CurrentCondition[]>(`${this.apiUrl}/currentconditions/v1/${id}?apikey=${this.API_KEY}`);
  }

  // TODO: Change the naming method and uncomment this in the future
  // getCityData(city: string): Observable<CityData[]> {
  //   return this.http.get<CityData[]>(`${this.apiUrl}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${city}`);
  // } 

  getCityData(city: string): Observable<CityData[]> {
    return this.http.get<CityData[]>(`${this.apiUrl}/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${city}`);
  } 
}
