import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountsService {

    result: any;

    constructor(private http: Http) { }

    getAccounts() {
        return this.http.get('/accounts')
            .map(result => this.result = result.json().data);
    }
    getAccount(id: string | string) {
        return this.getAccounts()
            .map(accounts => accounts.find(account => account._id == id));
    }
}