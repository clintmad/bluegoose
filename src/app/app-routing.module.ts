import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { CrewListComponent } from './crew/crew-list/crew-list.component';
import { CrewDetailComponent } from './crew/crew-detail/crew-detail.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountsDetailComponent } from './accounts/accounts-detail/accounts-detail.component';
import { BattlesComponent } from './battles/battles.component';

const appRoutes: Routes = [
    {
        path: '', component: ShipComponent, children: [
            { path: '', component: BattlesComponent, outlet: 'battles' },
            { path: '', component: AccountsListComponent, outlet: 'accounts' }     
        ]
    },
    
    { path: 'accounts/:id', component: AccountsDetailComponent},
    { path: 'crew', component: CrewListComponent },
    { path: 'crew/:id', component: CrewDetailComponent },
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