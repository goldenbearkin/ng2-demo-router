import { NgModule } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';

import { HomeModule } from './home/home.module';

// About Module would be lazy load
// import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    HomeModule
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
