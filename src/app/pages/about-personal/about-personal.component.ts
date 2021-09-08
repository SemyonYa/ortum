import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-personal',
  templateUrl: './about-personal.component.html',
  styleUrls: ['./about-personal.component.scss'],
  animations: [titleAnimation]
})
export class AboutPersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
