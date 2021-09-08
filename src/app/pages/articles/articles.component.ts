import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';
import { titleAnimation } from 'src/animations/title.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [titleAnimation, pageAnimation]
})
export class ArticlesComponent implements OnInit {
  ctors: Ctor[];
  constructor(
    private ctorRest: CtorRestService
  ) { }

  ngOnInit(): void {
    this.ctorRest.getAll();
    this.ctorRest.list$
      .subscribe(
        items => {
          this.ctors = items;
        },
        this.ctorRest.handleError
      );
  }

}
