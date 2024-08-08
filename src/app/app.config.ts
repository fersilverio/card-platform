import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserLoginService } from './services/user-login.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    UserLoginService,
    provideHttpClient(),
    provideAnimationsAsync(),
  ]
};
