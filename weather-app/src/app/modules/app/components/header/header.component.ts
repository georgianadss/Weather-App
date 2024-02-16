import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, RouterModule, SearchComponent]
})
export class HeaderComponent {
  public mockedCityName: string = 'London, United Kingdom, 11C';
}
