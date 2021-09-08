import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/models/Image';

@Component({
  selector: 'i-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: Image[] = [1, 2, 3, 4, 5, 6, 7].map(i => new Image(i, `category${i}.jpg`));
  images: CarouselItem[];
  activeId: number;

  constructor() { }

  ngOnInit(): void {
    this.images = this.items.map(i => new CarouselItem(i.id, i.name, null))
    this.setActivePosition(this.images[0].id);
  }

  setActivePosition(id: number) {
    this.activeId = id;
    if (this.images && this.images.length > 3) {
      const activeIndex: number = this.images.findIndex(i => i.id == this.activeId);
      const prevIndex: number = activeIndex == 0 ? this.images.length - 1 : activeIndex - 1;
      const prev2Index: number = prevIndex == 0 ? this.images.length - 1 : prevIndex - 1;
      const nextIndex: number = activeIndex == this.images.length - 1 ? 0 : activeIndex + 1;
      const next2Index: number = nextIndex == this.images.length - 1 ? 0 : nextIndex + 1;
      console.log(activeIndex, prevIndex, prev2Index, nextIndex, next2Index);

      this.images.forEach((image, index) => {
        switch (index) {
          case prev2Index:
            image.position = 'prev2';
            break;
          case prevIndex:
            image.position = 'prev';
            break;
          case activeIndex:
            image.position = 'active';
            break;
          case nextIndex:
            image.position = 'next';
            break;
          case next2Index:
            image.position = 'next2';
            break;
        
          default:
            image.position = 'none';
            break;
        }
      });
    }
  }

  prev() {
    const activeIndex: number = this.images.findIndex(i => i.id == this.activeId);
    const activeId = activeIndex == 0 ? this.images[this.images.length - 1].id : this.images[activeIndex - 1].id;
    this.setActivePosition(activeId)
  }
  
  next() {
    const activeIndex: number = this.images.findIndex(i => i.id == this.activeId);
    const activeId = activeIndex == this.images.length - 1 ? this.images[0].id : this.images[activeIndex + 1].id;
    this.setActivePosition(activeId)
  }

}

class CarouselItem {
  constructor(
    public id: number,
    public name: string,
    public position: 'prev2' | 'prev' | 'active' | 'next' | 'next2' | 'none'
  ) { }
}
