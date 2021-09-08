import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { pageAnimation } from 'src/animations/page.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';

@Component({
  selector: 'i-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [pageAnimation]
})
export class ArticleComponent implements OnInit {
  id: number;
  ctor: Ctor;
  constructor(
    private ctorRest: CtorRestService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ctorRest.getAll();
    this.ctorRest.list$
      .subscribe(
        items => {
          if (items) {
            this.ctor = items.find(i => i.id == this.id);
          }
        },
        this.ctorRest.handleError
      );
  }

}
