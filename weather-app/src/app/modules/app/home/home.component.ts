import { APP_INITIALIZER, ApplicationConfig, Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../../../services/config.service';
import { SelectedCityComponent } from '../components/selected-city/selected-city.component';



@Component({
    selector: 'app-home',
    standalone: true,
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (appConfig: ConfigService) => () => appConfig.init(), multi: true, deps: [ConfigService]
        }
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        HttpClientModule,
        SelectedCityComponent
    ]
})
export class HomeComponent {

}
