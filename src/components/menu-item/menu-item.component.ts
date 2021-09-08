import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'i-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem;
  @Output() onToggle = new EventEmitter<string>();

  toggle() {
    this.onToggle.emit(this.menuItem.route);
  }
}

export interface MenuItem {
  id: number,
  title: string,
  route?: string,
  expanded: boolean,
  children?: MenuItem[],
  withoutFullMatch: boolean,
  action?(): void;
}
