import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends BehaviorSubject<RegionType> {
  ORTUM_REGION = 'ORTUM_REGION';
  constructor() {
    super('Москва');
    this.next(this.getFromStorage);
  }

  private get getFromStorage(): RegionType {
    return JSON.parse(localStorage.getItem(this.ORTUM_REGION));
  }

  toStorage(region: RegionType) {
    localStorage.setItem(this.ORTUM_REGION, JSON.stringify(region));
    this.next(region);
  }
}

export type RegionType = 'Москва' | 'Норильск';
