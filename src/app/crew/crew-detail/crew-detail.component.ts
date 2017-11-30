import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

import { CrewService } from '../crew.service';

@Component({
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent {

  person: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrewService
  ) {
    router.events.subscribe(val => {
      this.getPersonByRouteId()
    })
   }

  getPersonByRouteId() {
      var id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      this.service.getPerson(id).subscribe(person => this.person = person);
  }

  gotoCrew() {
    this.router.navigate(['crew'])
  }
}