import { NgModule }      from '@angular/core';

import { HomeComponent }  from './home.component';
import { homeRouting } from './home.routing';
import { AddressComponent } from './@address/address.component';

@NgModule({
  imports: [
    homeRouting
  ],
  declarations: [ HomeComponent, AddressComponent ]
})
export class HomeModule { }
