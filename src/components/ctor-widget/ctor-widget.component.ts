import { Component, Input, OnInit } from '@angular/core';
import { Ctor } from 'src/models/Ctor';

@Component({
  selector: 'i-ctor-widget',
  templateUrl: './ctor-widget.component.html',
  styleUrls: ['./ctor-widget.component.scss']
})
export class CtorWidgetComponent implements OnInit {
  @Input() ctor: Ctor;
  @Input() cssClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
