import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { NgxPaginationModule, PaginatePipe, PaginationService } from 'ngx-pagination';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
  ]
};
