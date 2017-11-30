import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ShipComponent } from './ship/ship.component';
import { CrewListComponent } from './crew/crew-list/crew-list.component';
import { CrewDetailComponent } from './crew/crew-detail/crew-detail.component';
import { BattlesComponent } from './battles/battles.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
