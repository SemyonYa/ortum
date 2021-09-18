import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-services-price',
  templateUrl: './services-price.component.html',
  styleUrls: ['./services-price.component.scss'],
  animations: [titleAnimation]
})
export class ServicesPriceComponent implements OnInit {
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
