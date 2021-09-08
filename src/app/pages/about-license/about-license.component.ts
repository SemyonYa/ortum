import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-about-license',
  templateUrl: './about-license.component.html',
  styleUrls: ['./about-license.component.scss'],
  animations: [titleAnimation]
})
export class AboutLicenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
