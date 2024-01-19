import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ FormsModule, ReactiveFormsModule ]
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
      userNameControl: new FormControl(),
      passwordControl: new FormControl() 
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
