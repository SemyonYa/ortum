import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { ViewportSizeService } from './viewport-size.service';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {
  sizes: string[] = [
    'small',
    'medium',
    'large',
  ];
  size: string;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private vsService: ViewportSizeService
  ) {
    fromEvent(window, 'resize')
      .pipe(
        throttleTime(100)
      )
      .subscribe(
        e => {
          vsService.cacheCurrentWidth();
          this.build();
        }
      );
  }

  @Input() set ifViewportSize(size: string) {
    if (this.size != size) {
      this.size = size;
      this.build();
    }
  }

  build() {
    this.viewContainer.clear();
    if (this.sizes.includes(this.size)) {
      if (this.vsService.currentSizeIs(this.size)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }
}

export interface IConfig {
    medium: number;
    large: number;
  }
  
