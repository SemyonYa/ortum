import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-about-positions',
  templateUrl: './about-positions.component.html',
  styleUrls: ['./about-positions.component.scss'],
  animations: [titleAnimation]
})
export class AboutPositionsComponent implements OnInit {
  ctors: Ctor[];
  activePositionId: number;
  constructor(
    private dataRest: DataApiService
  ) { }

  ngOnInit(): void {
    this.dataRest.getPositions()
      .subscribe(
        items => {
          this.ctors = items;
        }
      );
  }

  selectPosition(id: number) {
    this.activePositionId = this.activePositionId == id ? null : id;
  }

}
