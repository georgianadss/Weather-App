import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTE } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../state/app.state';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTE), provideHttpClient(withFetch()) ,provideClientHydration(),
  importProvidersFrom(NgxsModule.forRoot([AppState]))]
  
};
