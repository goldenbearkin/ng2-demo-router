import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';

import { StoreComponent } from './@store/store.component';
import { SupermarketComponent } from './@supermarket/supermarket.component';

export const companyRouting: ModuleWithProviders = RouterModule.forChild([
  // { path: 'company', component: CompanyComponent },
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'store', pathMatch: 'full' },
      { path: 'store', component: StoreComponent },
      { path: 'supermarket', component: SupermarketComponent }
    ]
  }
  // { path: 'company',
  //   component: CompanyComponent,
    // children: [
    //   { path: '', redirectTo: 'store', pathMatch: 'full' },
    //   { path: 'store', component: StoreComponent }
    // ]
  // }
  // { path: '', component: StoreComponent },
  // { path: 'supermarket', component: SupermarketComponent }

  // {
  //   path: 'about',
  //   component: CompanyComponent,
  //   children: [
  //     { path: 'company', component: CompanyComponent }
  //   ]
  // }
]);
