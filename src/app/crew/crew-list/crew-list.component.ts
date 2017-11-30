import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Router } from '@angular/router';


@Component({
  selector: 'crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

    crew: Array<any>;

  constructor(
    private crewService: CrewService,
    private router: Router
  ) { }

  ngOnInit() {
    this.crewService.getCrew().subscribe(
      res => this.crew = res
    )
  }
  gotoHome() {        
    this.router.navigate([''])
}

}
