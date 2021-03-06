import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShipService {

    result: any;

    constructor(private http: Http) { }

    getShips() {
        return this.http.get('/ship')
            .map(result => this.result = result.json().data);
    }
}