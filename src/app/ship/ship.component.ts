import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShipService } from './ship.service';
import { Ship } from './ship.models';

@Component({
  selector: 'ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

   ships: Ship[];

  constructor(
    private service: ShipService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.getShip().subscribe(
      (ships: Ship[]) => this.ships = ships
    );
  }

}
