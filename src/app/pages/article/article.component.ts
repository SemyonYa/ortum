import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { pageAnimation } from 'src/animations/page.animation';
import { Ctor } from 'src/models/Ctor';
import { CtorRestService } from 'src/services/api/ctor.rest.service';
import { DataApiService } from 'src/services/api/data.rest.service';

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
    private dataRest: DataApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.dataRest.getArticle(this.id)
      .subscribe(
        item => {
          console.log("🚀 ~ file: article.component.ts ~ line 27 ~ ArticleComponent ~ ngOnInit ~ item", item)
          this.ctor = item;
        }
      );
  }

}
