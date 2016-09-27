import { NgModule }      from '@angular/core';

import { AboutComponent }  from './about.component';
import { aboutRouting } from './about.routing';

import { CompanyModule } from './company/company.module';

@NgModule({
  imports: [
    aboutRouting,
    CompanyModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule { }
