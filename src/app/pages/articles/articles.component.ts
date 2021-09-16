import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { DataApiService } from 'src/services/api/data.rest.service';

@Component({
  selector: 'i-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [titleAnimation, pageAnimation]
})
export class ArticlesComponent implements OnInit {
  ctors: Ctor[];
  constructor(
    private dataRest: DataApiService
  ) { }

  ngOnInit(): void { 
    this.dataRest.getArticles()
      .subscribe(
        items => {
          this.ctors = items; 
        }
      );
  }

}
