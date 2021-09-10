import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-services-price',
  templateUrl: './services-price.component.html',
  styleUrls: ['./services-price.component.scss'],
  animations: [titleAnimation]
})
export class ServicesPriceComponent implements OnInit {
  services: number[];
  constructor() { }

  ngOnInit(): void {
    this.services = new Array(25).fill(0).map((_, index) => index + 1);
  }

}
