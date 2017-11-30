import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BattlesService {

    result: any;

    constructor(private http: Http) { }

    getBattles() {
        return this.http.get('/battles')
            .map(result => this.result = result.json().data);
    }
}