import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { CityData, CityDetails } from '../../../models/city-data';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit, OnDestroy {
  @Select(AppState.cities) cities$!: Observable<CityDetails[]>;

  public cities!: CityDetails[];

  public unsubscribe: Subject<void> = new Subject()

  ngOnInit(): void {
    this.cities$.pipe(takeUntil(this.unsubscribe)).subscribe((cities) => {
      this.cities = cities;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
