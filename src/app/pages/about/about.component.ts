import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';

@Component({
  selector: 'i-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [pageAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
