import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-personal',
  templateUrl: './about-personal.component.html',
  styleUrls: ['./about-personal.component.scss'],
  animations: [titleAnimation]
})
export class AboutPersonalComponent implements OnInit {
  persons: number[];
  constructor() { }

  ngOnInit(): void {
    this.persons = [1, 2, 3, 4, 5];
  }

}
