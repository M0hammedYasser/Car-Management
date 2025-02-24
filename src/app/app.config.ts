import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./interceptor/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor]), // Use function-based interceptor
      withFetch()
    ),
    provideAnimationsAsync('noop')
  ]
};
