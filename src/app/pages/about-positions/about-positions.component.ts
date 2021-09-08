import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-positions',
  templateUrl: './about-positions.component.html',
  styleUrls: ['./about-positions.component.scss'],
  animations: [titleAnimation]
})
export class AboutPositionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
