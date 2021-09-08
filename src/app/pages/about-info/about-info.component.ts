import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
  animations: [titleAnimation]
})
export class AboutInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
