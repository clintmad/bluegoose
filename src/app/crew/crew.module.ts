import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';

import { CrewService } from './crew.service';

import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CrewRoutingModule } from './crew-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CommonModule,
        CrewRoutingModule
    ],
    declarations: [
        CrewListComponent,
        CrewDetailComponent
    ],
    providers: [
        CrewService
    ]
})
export class CrewModule { }