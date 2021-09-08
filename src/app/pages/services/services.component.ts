import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';

@Component({
  selector: 'i-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [pageAnimation]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
