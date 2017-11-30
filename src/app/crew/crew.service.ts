import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrewService {

    result: any;

    constructor(private http: Http) { }

    getCrew() {
        return this.http.get('/people')
            .map(result => this.result = result.json().data);
    }
    getPerson(id: string | string) {
        return this.getCrew()
            .map(crew => crew.find(person => person._id == id));
    }
}