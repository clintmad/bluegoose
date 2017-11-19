import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipComponent } from './ship/ship.component';

const appRoutes: Routes = [
    { path: '', component: ShipComponent, outlet: 'ship' },
    { path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule { }