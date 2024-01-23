import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-errors',
  standalone:true,
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErrorsComponent),
      multi: true
    }
  ]
})
export class ErrorsComponent implements ControlValueAccessor  {
  @Input() formControl!: FormControl;

  value!: string;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};


readonly MIN_LENGTH: number = 5;

}
