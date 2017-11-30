import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AccountsService } from '../accounts.service';

@Component({
  templateUrl: './accounts-detail.component.html',
  styleUrls: ['../accounts.component.css']
})
export class AccountsDetailComponent {

  account: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AccountsService
  ) {
    router.events.subscribe(val => {
      this.getAccountByRouteId()
    })
   }

  getAccountByRouteId() {
      var id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      this.service.getAccount(id).subscribe(account => this.account = account);
  }

  gotoHome() {
    this.router.navigate([''])
  }
}