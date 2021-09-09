import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-positions',
  templateUrl: './about-positions.component.html',
  styleUrls: ['./about-positions.component.scss'],
  animations: [titleAnimation]
})
export class AboutPositionsComponent implements OnInit {
  positions: number[];
  activePosition: number;
  constructor() { }

  ngOnInit(): void {
    this.positions = [1, 2, 3, 4];
  }

  selectPosition(id: number) {
    this.activePosition = this.activePosition == id ? null : id;
  }

}
