import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { RecipeBookAppComponent, environment } from './app/';
import { ShoppingListService } from './app/shopping-list/shopping-list.service';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';

// if (environment.production) {
  enableProdMode();
// }

bootstrap(RecipeBookAppComponent, [APP_ROUTES_PROVIDERS, ShoppingListService, disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS]);
