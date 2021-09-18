import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  animations: [titleAnimation]
})
export class ServicesListComponent implements OnInit {
  ctors: Ctor[]; 
  constructor(
    private dataRest: DataApiService
  ) { }

  ngOnInit(): void {
    this.dataRest.getServices()
      .subscribe(
        items => {
          this.ctors = items;
        }
      );
  }

}
