import { Component, OnInit } from '@angular/core';
import { BattlesService } from './battles.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'battles',
  templateUrl: './battles.component.html',
  styleUrls: ['../ship/ship.component.css']
})
export class BattlesComponent implements OnInit {

    battles: Array<any>;

  constructor(
    private battlesService: BattlesService
  ) { }

  ngOnInit() {
    this.battlesService.getBattles().subscribe(
      res => this.battles = res
    )
  }

}
