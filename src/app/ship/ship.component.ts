import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component({
  selector: 'ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  public ships: Ship[];

  constructor(
    private service: ShipService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.getShip().subscribe(
      data => this.ships = data
    );
  }

}
