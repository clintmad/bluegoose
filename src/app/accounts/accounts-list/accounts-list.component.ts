import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'accounts',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['../accounts.component.css']
})
export class AccountsListComponent implements OnInit {

  accounts: Array<any>;

  constructor(
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(
      res => this.accounts = res
    )
  }

}

