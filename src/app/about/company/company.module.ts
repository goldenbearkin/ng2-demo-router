import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { CompanyComponent }  from './company.component';
import { companyRouting } from './company.routing';

import { SupermarketComponent } from './@supermarket/supermarket.component';
import { StoreComponent } from './@store/store.component';

@NgModule({
  imports: [
    companyRouting
  ],
  declarations: [ CompanyComponent, SupermarketComponent, StoreComponent ]
})
export class CompanyModule { }
