import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule ]
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;

  get userNameControl() {
    return this.formGroup.get('userNameControl') as FormControl;
  }

  get passwordControl() {
    return this.formGroup.get('passwordControl') as FormControl;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userNameControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(5)]) 
    })

    this.formGroup.updateValueAndValidity();
  }

  onSubmit() {
    if(this.formGroup.invalid) {
      return;
    }

    console.log(this.formGroup.value);
  }
}
