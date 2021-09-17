import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { environment } from 'src/environments/environment';
import { Image } from 'src/models/Image';
import { LocaleImage } from 'src/models/LocaleImage';

@Component({
  selector: 'i-about-license',
  templateUrl: './about-license.component.html',
  styleUrls: ['./about-license.component.scss'],
  animations: [titleAnimation]
})
export class AboutLicenseComponent implements OnInit {
  licenseImages: Image[] = [];
  activeImage: Image;
  licensePDFs: string[] = [];
  constructor() { }

  ngOnInit(): void {
    environment.licenses.forEach(l => {
      this.licenseImages.push(new LocaleImage(1, l.path))
      this.licensePDFs.push(l.path);
    }
    );
  }

  showViewer(image: Image) {
    console.log('show');

    this.activeImage = image;
  }

  hideViewer() {
    this.activeImage = null;
  }
}
