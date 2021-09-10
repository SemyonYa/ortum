import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Image } from 'src/models/Image';

@Component({
  selector: 'i-about-license',
  templateUrl: './about-license.component.html',
  styleUrls: ['./about-license.component.scss'],
  animations: [titleAnimation]
})
export class AboutLicenseComponent implements OnInit {
  licenseImage: Image;
  activeImage: Image;
  constructor() { }

  ngOnInit(): void {
    this.licenseImage = new Image(0, 'category4.jpg');
  }

  showViewer(image: Image) {
    console.log('show');
    
    this.activeImage = this.licenseImage;
  }

  hideViewer() {
    this.activeImage = null;
  }
}
