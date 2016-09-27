import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

export const appRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
]);
