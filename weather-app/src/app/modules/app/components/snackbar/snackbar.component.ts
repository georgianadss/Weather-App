import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})

export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: any,) {}

  onDismiss() {
    this._snackBar.dismiss();
  }
}
