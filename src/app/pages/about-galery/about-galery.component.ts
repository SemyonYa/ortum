import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-galery',
  templateUrl: './about-galery.component.html',
  styleUrls: ['./about-galery.component.scss'],
  animations: [titleAnimation]
})
export class AboutGaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
