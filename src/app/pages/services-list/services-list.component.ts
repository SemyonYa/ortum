import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  animations: [titleAnimation]
})
export class ServicesListComponent implements OnInit {
  services: number[];
  constructor() { }

  ngOnInit(): void {
    this.services = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }

}
