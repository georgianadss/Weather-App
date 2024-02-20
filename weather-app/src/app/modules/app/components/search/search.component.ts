import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ClearCities, FetchCities } from '../../../state/app.actions';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { Subject, debounceTime, takeUntil } from 'rxjs';

interface FormGroupData {
  searchControl: FormControl;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuggestionsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formGroup!: FormGroup<FormGroupData>;
  public debounceTimer: number = 1000;
  public modelChanged: Subject<string> = new Subject<string>();
  public unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store,) {}

  get searchControl() {
    return this.formGroup.controls.searchControl;
  }

  ngOnInit(): void {
    this.modelChanged.pipe(takeUntil(this.unsubscribe))
    .pipe(debounceTime(this.debounceTimer)).subscribe((data) => this.emmitValue(data))

    this.formGroup = new FormGroup({
      searchControl: new FormControl(''),
    })
  }

  debounceChange() {
    this.modelChanged.next(this.searchInput())
  }

  emmitValue(data: string) {
    this.store.dispatch(new FetchCities(data));
  }

  searchInput() {
   return this.searchControl.value;
  }

  detectEmptySearch() {
    if(!this.searchControl.value) {
      this.store.dispatch(new ClearCities());
    }
  }
}
