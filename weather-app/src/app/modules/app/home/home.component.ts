import { APP_INITIALIZER, ApplicationConfig, Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../../../services/config.service';



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
    ]
})
export class HomeComponent {

}
