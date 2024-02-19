import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FetchCities } from '../../../state/app.actions';
import { SuggestionsComponent } from '../suggestions/suggestions.component';

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
export class SearchComponent implements OnInit{
  public formGroup!: FormGroup<FormGroupData>;

  constructor(private store: Store,) {}

  get searchControl() {
    return this.formGroup.controls.searchControl;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      searchControl: new FormControl(''),
    })
  }

  searchInput(city: string) {
    this.store.dispatch(new FetchCities(city))
  }
}
