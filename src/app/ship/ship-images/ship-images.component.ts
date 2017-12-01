import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ship-images',
    templateUrl: './ship-images.component.html',
    styleUrls: ['../ship.component.css']
})
export class ShipImagesComponent implements OnInit {

    ships: Array<any>;

    constructor(
        private shipService: ShipService,
        private router: Router
    ) { }

    ngOnInit() {
        this.shipService.getShips().subscribe(
            res => this.ships = res
        )
    }
    gotoHome() {
        this.router.navigate([''])
    }

}
