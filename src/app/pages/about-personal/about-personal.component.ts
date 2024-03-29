import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-about-personal',
  templateUrl: './about-personal.component.html',
  styleUrls: ['./about-personal.component.scss'],
  animations: [titleAnimation]
})
export class AboutPersonalComponent implements OnInit {
  ctors: Ctor[];
  constructor(
    private dataRest: DataApiService
  ) { }

  ngOnInit(): void {
    this.dataRest.getPersonal()
      .subscribe(
        items => {
          this.ctors = items;
        }
      );
  }

}
