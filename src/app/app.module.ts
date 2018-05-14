import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { carrosComponent } from "./carros/carros.component";

import { carrosService } from "./service/carros.service";


@NgModule({
  declarations: [
    AppComponent,
    carrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [carrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
