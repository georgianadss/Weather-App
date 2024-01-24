import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/modules/app/app.config';
import { AppComponent } from './app/modules/app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/modules/app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE)],
});
  // .catch((err) => console.error(err));
