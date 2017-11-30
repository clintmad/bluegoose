import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';

import { CrewListComponent } from '../crew/crew-list/crew-list.component';
import { ShipComponent } from './ship.component';
import { BattlesComponent } from '../battles/battles.component';
import { AccountsListComponent } from '../accounts/accounts-list/accounts-list.component';
import { AccountsDetailComponent } from '../accounts/accounts-detail/accounts-detail.component';

import { CrewModule } from '../crew/crew.module';
import { AppRoutingModule } from '../app-routing.module';
import { CrewService } from '../crew/crew.service';
import { ShipService } from './ship.service';
import { BattlesService } from '../battles/battles.service';
import { AccountsService } from '../accounts/accounts.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        CrewModule,
        AppRoutingModule
    ],
    declarations: [
        ShipComponent,
        BattlesComponent,
        AccountsListComponent,
        AccountsDetailComponent
    ],
    providers: [
        ShipService,
        BattlesService,
        AccountsService
    ]
})
export class ShipModule { }