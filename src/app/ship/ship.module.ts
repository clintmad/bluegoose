import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipComponent } from './ship.component';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ShipComponent
    ],
    providers: [
        ShipService
    ]
})
export class ShipModule { }