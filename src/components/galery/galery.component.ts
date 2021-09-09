import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/models/Image';

@Component({
  selector: 'i-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  @Input() images: Image[] = [1, 2, 3, 4, 5, 6, 7].map(i => new Image(i, `category${i}.jpg`));
  activeImage: Image;

  constructor() { }

  ngOnInit(): void {
  }

  showViewer(image: Image) {
    this.activeImage = image;
    document.querySelector('body').style.overflowY = 'hidden';
  }

  hideViewer() {
    this.activeImage = null;
    document.querySelector('body').style.overflowY = 'auto';
  }

}
