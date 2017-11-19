import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ship } from './ship';
import 'rxjs/add/operator/map';

@Injectable()
export class ShipService {
    constructor(private http: Http) { }

    getShip() {
        return this.http.get('/index')
            .map(res => res.json());
    }
}