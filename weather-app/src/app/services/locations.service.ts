import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface TopCityList {
   Key: number,
   Region: {
    ID: string,
    LocalizedName: string,
   },
   Country: {
    ID: string,
    LocalizedName: string,
   },
   TimeZone: {
    Code: string,
    Name: string,
    GmtOffset: number,
  },
  GeoPosition: {
    Latitude: number,
    Longitude: number,
  }
}

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
}
