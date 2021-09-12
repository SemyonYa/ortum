import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.scss']
})
export class SelectRegionComponent implements OnInit {
  selectedRegion: 'Норильск' | 'Москва';
  selectShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedRegion = 'Москва';
  }

  showSelect() {
    this.selectShown = true;
  }

  hideSelect() {
    this.selectShown = false;
  }

  backClick(e: MouseEvent) {
    if (e.target['id'] == 'select-region-back') {
      this.hideSelect();
    }
  }

  selectRegion(region: 'Норильск' | 'Москва') {
    this.selectedRegion = region;
    this.hideSelect();
  }
}
