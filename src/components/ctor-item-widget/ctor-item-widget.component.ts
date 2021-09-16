import { Component, Input, OnInit } from '@angular/core';
import { CtorItem } from 'src/models/Ctor';

@Component({
  selector: 'i-ctor-item-widget',
  templateUrl: './ctor-item-widget.component.html',
  styleUrls: ['./ctor-item-widget.component.scss']
})
export class CtorWidgetComponent implements OnInit {
  @Input() ctorItem: CtorItem;
  @Input() cssClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
