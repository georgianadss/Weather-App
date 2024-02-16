import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface FormGroupData {
  searchControl: FormControl;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  public formGroup!: FormGroup<FormGroupData>;

  constructor() {}

  get searchControl() {
    return this.formGroup.controls.searchControl;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      searchControl: new FormControl(''),
    })
  }
}
