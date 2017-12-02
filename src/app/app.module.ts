import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrewRoutingModule } from './crew/crew-routing.module';

import { ShipModule } from './ship/ship.module';
import { CrewModule } from './crew/crew.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShipModule,
    CrewModule,
    BrowserModule,
    AppRoutingModule,
    CrewRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
