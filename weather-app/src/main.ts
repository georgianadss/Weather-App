import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/modules/app/app.component';
import { provideRouter, } from '@angular/router';
import { routes } from './app/modules/app/app.routes';
import { LocationsService } from './app/services/locations.service';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app/modules/state/app.state';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptors/app.interceptor';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), LocationsService, provideAnimations(),
  importProvidersFrom(NgxsModule.forRoot([AppState])), 
  provideHttpClient(withInterceptors([authInterceptor]))],  
});
