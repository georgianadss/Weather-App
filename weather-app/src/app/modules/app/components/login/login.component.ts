import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { ErrorsComponent } from '../errors/errors.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Select, Store } from '@ngxs/store';
import { FetchLoginData } from '../../../state/app.actions';
import { Login, LoginResponse } from '../../../models/login-data';
import { AppState } from '../../../state/app.state';
import { Observable } from 'rxjs';

interface LoginData {
  userNameControl: FormControl<string | null>;
  passwordControl: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, ErrorsComponent, RouterModule, HeaderComponent,]
})
export class LoginComponent implements OnInit {
  @Select(AppState.login) login$: Observable<LoginResponse> | undefined;

  public login: LoginResponse | undefined;

  public loginResponse: LoginResponse | undefined;

  public formGroup!: FormGroup<LoginData>;

  public errorMessage: string | undefined;

  public readonly MIN_LENGTH: number = 5;

  get userNameControl() {
    return this.formGroup.controls.userNameControl;
  }

  get passwordControl() {
    return this.formGroup.controls.passwordControl;
  }

  constructor (private store: Store) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userNameControl: new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH)]),
    })

    this.login$?.pipe().subscribe((response) => {
      this.loginResponse = response;
    })
  }

  onSubmit() {
    if(this.formGroup.invalid) {
      return;
    }
   const login: Login = {
    userName: this.userNameControl.value,
    password: this.passwordControl.value,
   }
    this.store.dispatch(new FetchLoginData(login)).pipe().subscribe({
      next: () => {
        this.errorMessage = undefined;
        this.resetForm()},
      error: () => this.errorMessage = 'Username or password is incorrect',
    })
  }

  resetForm() {
    this.formGroup.reset();
  }
}
