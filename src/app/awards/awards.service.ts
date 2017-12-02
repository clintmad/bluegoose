import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AwardsService {

    result: any;

    constructor(private http: Http) { }

    getAwards() {
        return this.http.get('/awards')
            .map(result => this.result = result.json().data);
    }
}