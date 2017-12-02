import { Component, OnInit } from '@angular/core';
import { AwardsService } from './awards.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'awards',
  templateUrl: './awards.component.html',
  styleUrls: ['../ship/ship.component.css']
})
export class AwardsComponent implements OnInit {

    awards: Array<any>;

  constructor(
    private awardsService: AwardsService
  ) { }

  ngOnInit() {
    this.awardsService.getAwards().subscribe(
      res => this.awards = res
    )
  }

}
