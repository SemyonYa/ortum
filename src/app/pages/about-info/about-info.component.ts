import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
  animations: [titleAnimation]
})
export class AboutInfoComponent implements OnInit {
  ctor: Ctor;
  constructor(
    private dataRest: DataApiService
  ) { }

  ngOnInit(): void {
    this.dataRest.getAbout()
      .subscribe(
        item => {
          this.ctor = item;
        }
      );

  }

}
