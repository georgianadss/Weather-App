import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/modules/app/app.config';
import { AppComponent } from './app/modules/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
