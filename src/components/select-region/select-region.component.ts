import { Component, OnInit } from '@angular/core';
import { RegionService, RegionType } from 'src/services/region.service';

@Component({
  selector: 'i-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.scss']
})
export class SelectRegionComponent implements OnInit {
  selectedRegion: RegionType;
  private selectShown: boolean = false;

  constructor(
    private regionService: RegionService
  ) { }

  ngOnInit(): void {
    this.regionService
      .subscribe(
        r => {
          this.selectedRegion = r;
        }
      );
  }

  get shown() {
    return !this.selectedRegion || this.selectShown;
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

  selectRegion(region: RegionType) {
    this.regionService.toStorage(region);
    // this.selectedRegion = region;
    this.hideSelect();
  }
}
