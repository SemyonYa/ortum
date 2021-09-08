import { Injectable } from '@angular/core';
import { BehaviorSubject, config } from 'rxjs';
import { IConfig } from './if-viewport-size.directive';

@Injectable({
    providedIn: 'root'
})
export class ViewportSizeService {
    currentWidth$: BehaviorSubject<number>;
    config: IConfig;

    constructor() {
        this.currentWidth$ = new BehaviorSubject<number>(window.innerWidth);
    }

    init(config: IConfig) {
        this.config = config;
    }

    cacheCurrentWidth() {
        this.currentWidth$.next(window.innerWidth);
    }

    currentSizeIs(size: string): boolean {
        const currentWidth: number = this.currentWidth$.value;
        return (
            (size == 'large' && currentWidth >= this.config.large) ||
            (size == 'medium' &&
                currentWidth < this.config.large &&
                currentWidth >= this.config.medium) ||
            (size == 'small' && currentWidth < this.config.medium)
        );
    }
}
