import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-favorite-cities',
    standalone: true,
    templateUrl: './favorite-cities.component.html',
    styleUrls: ['./favorite-cities.component.scss'],
    imports: [CommonModule, HeaderComponent]
})
export class FavoriteCitiesComponent {

}
