import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { CompanyModule } from './company/company.module';

export const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      { path: 'company',  loadChildren: () => CompanyModule }
      // { path: 'company', component: CompanyComponent }
    ]
  }
]);
