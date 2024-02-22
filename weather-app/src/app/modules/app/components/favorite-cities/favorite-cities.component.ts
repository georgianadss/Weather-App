import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "../../home/home.component";

@Component({
    selector: 'app-favorite-cities',
    standalone: true,
    templateUrl: './favorite-cities.component.html',
    styleUrls: ['./favorite-cities.component.scss'],
    imports: [CommonModule, RouterModule, HeaderComponent, RouterOutlet, HomeComponent]
})
export class FavoriteCitiesComponent {

}
