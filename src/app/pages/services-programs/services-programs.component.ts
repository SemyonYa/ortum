import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-services-programs',
  templateUrl: './services-programs.component.html',
  styleUrls: ['./services-programs.component.scss'],
  animations: [titleAnimation]
})
export class ServicesProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
