import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/models/Image';

@Component({
  selector: 'i-galery-viewer',
  templateUrl: './galery-viewer.component.html',
  styleUrls: ['./galery-viewer.component.scss']
})
export class GaleryViewerComponent implements OnInit {
  @Input() image: Image;
  @Input() thumbs: Image[];
  @Output() onClose = new EventEmitter<null>();
  @Output() onSelectImage = new EventEmitter<Image>();

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(image: Image) {
    this.onSelectImage.emit(image);
  }

  next() {
    const activeIndex: number = this.thumbs.indexOf(this.image);

    const nextImage: Image = activeIndex == this.thumbs.length - 1 ? this.thumbs[0] : this.thumbs[activeIndex + 1];
    this.selectImage(nextImage);
  }

  backgroundClick(e: MouseEvent) {
    if ((e.target as HTMLElement).id == 'galery-viewer-background') {
      this.close();
    }
  }

  close() {
    this.onClose.emit();
  }
}
