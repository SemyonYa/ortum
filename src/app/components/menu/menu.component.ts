import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/components/menu-item/menu-item.component';

@Component({
  selector: 'i-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menu: MenuItem[];
  @Output() onHide = new EventEmitter();
  @Output() onToggleMenuItem = new EventEmitter<string>();

  hide() {
    this.onHide.emit();
  }

  toggleItem(route: string) {
    this.onToggleMenuItem.emit(route);
  }
}
