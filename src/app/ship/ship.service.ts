import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Ship } from './ship.models';

@Injectable()
export class ShipService {

    ships: Ship[] = [];

    constructor(private http: Http) { }


    getShip() {
        return this.http.get('http://localhost:3000/')
            .map((response: Response) => {
                const ships = response.json()
                let transformedShips: Ship[] = [];
                for (let ship of ships) {
                    transformedShips.push(new Ship(
                        ship._id,
                        ship.name,
                        ship.nickname,
                        ship.crew
                    )
                    );
                }
                this.ships = transformedShips;
                return transformedShips;
            });
    }
}