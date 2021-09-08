import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'i-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() menuVisible: boolean;
  @Output() onToggleMenu = new EventEmitter<null>();

  toggleMenu() {
    this.onToggleMenu.emit();
  }

}
