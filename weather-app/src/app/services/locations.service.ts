import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Region  {
  ID: string,
  LocalizedName: string,
  EnglishName: string,
}

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
 private apiUrl = 'http://dataservice.accuweather.com';

 public readonly API_KEY: string = '2RjZ8ITAKPnzRJe1ZLCOArPH4Hcr4JTr';

  constructor(private http: HttpClient) { };

  getRegionCode(): Observable<Region[]> {
    const headers = new HttpHeaders().set('apiKey', this.API_KEY);
    return this.http.get<Region[]>(`${this.apiUrl}/locations/v1/regions?apikey=${this.API_KEY}`);
  }

  getCountryList(countryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/locations/v1/countries/${countryId}?apikey=${this.API_KEY}`);
  }
}
