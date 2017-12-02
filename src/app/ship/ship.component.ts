import { Component, OnInit } from '@angular/core';
import { ShipService } from './ship.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  ships: Array<any>;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.shipService.getShips().subscribe(
      res => this.ships = res
    )
  }
}
