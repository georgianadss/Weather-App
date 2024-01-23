import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-errors',
  standalone:true,
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  imports: [ CommonModule ]
})
export class ErrorsComponent {
  @Input() control!: FormControl;

MIN_LENGTH!: number;

}
