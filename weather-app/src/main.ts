import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/modules/app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/modules/app/app.routes';
import { LocationsService } from './app/services/locations.service';



bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTE), LocationsService ],
    
});
