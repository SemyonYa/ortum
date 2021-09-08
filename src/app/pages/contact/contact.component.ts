import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';

@Component({
  selector: 'i-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [pageAnimation]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
