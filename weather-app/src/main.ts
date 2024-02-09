import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/modules/app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/modules/app/app.routes';
import { LocationsService } from './app/services/locations.service';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app/modules/state/app.state';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTE), LocationsService, 
  importProvidersFrom(NgxsModule.forRoot([AppState]))],   
});
