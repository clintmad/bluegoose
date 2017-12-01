import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';

const crewRoutes: Routes = [    
    { path: 'crew', component: CrewListComponent },
    { path: 'crew/:id', component: CrewDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(crewRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrewRoutingModule { }