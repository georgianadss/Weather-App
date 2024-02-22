import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  RouterLink, RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { City } from '../../../models/city-data';
import { Select } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HomeComponent } from '../../home/home.component';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule, SearchComponent, RouterLink, HomeComponent]
})
export class HeaderComponent implements OnInit {
  @Select(AppState.favoriteCities) favoriteCities$!: Observable<City[]>;

  public isFavorite!: boolean;
  public mockedCityName: string = 'London, United Kingdom, 11C';
  public favoriteCities: City[] = [];
  public unsubscribe: Subject<void> = new Subject();

  constructor() { };

  ngOnInit(): void {
    this.favoriteCities$.pipe(takeUntil(this.unsubscribe)).subscribe((favoriteCities) => {
      this.favoriteCities = favoriteCities;
    })

  }
}
