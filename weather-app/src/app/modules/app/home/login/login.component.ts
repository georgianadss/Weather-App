import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { ErrorsComponent } from '../../components/errors/errors.component';
import { RouterModule } from '@angular/router';

interface LoginData {
  userNameControl: FormControl<string | null>;
  passwordControl: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, ErrorsComponent, RouterModule ]
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup<LoginData>;

  public readonly MIN_LENGTH: number = 5;

  get userNameControl() {
    return this.formGroup.controls.userNameControl;
  }

  get passwordControl() {
    return this.formGroup.controls.passwordControl;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userNameControl: new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH)]),
    })
  }

  onSubmit() {
    if(this.formGroup.invalid) {
      return;
    }

    console.log(this.formGroup.value);
  }
}
