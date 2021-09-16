import { Component, Input } from '@angular/core';
import { Ctor } from 'src/models/Ctor';

@Component({
  selector: 'i-articles-brief',
  templateUrl: './articles-brief.component.html',
  styleUrls: ['./articles-brief.component.scss']
})
export class ArticlesBriefComponent {
  @Input() ctor: Ctor;
}
