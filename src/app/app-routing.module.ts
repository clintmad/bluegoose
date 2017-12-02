import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountsDetailComponent } from './accounts/accounts-detail/accounts-detail.component';
import { BattlesComponent } from './battles/battles.component';
import { ShipImagesComponent } from './ship/ship-images/ship-images.component';
import { AwardsComponent } from './awards/awards.component';

const appRoutes: Routes = [
    {
        path: '', component: ShipComponent, children: [
            { path: '', component: BattlesComponent, outlet: 'battles' },
            { path: '', component: AccountsListComponent, outlet: 'accounts' },
            { path: '', component: AwardsComponent, outlet: 'awards' }
        ]
    },
    { path: 'accounts/:id', component: AccountsDetailComponent },
    { path: 'images', component: ShipImagesComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
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