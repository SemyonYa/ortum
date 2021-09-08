import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { Ctor, CtorItem, CtorItemType } from 'src/models/Ctor';

@Injectable({
  providedIn: 'root'
})
export class CtorRestService extends RestService<Ctor> {
  // TODO: public controller
  route = '/ctor';

  constructor(http: HttpClient) {
    super(http);
  }

  // TODO: check
  tConstructor(item: any): Ctor {
    let ctor = this.responseToCamelCase(item) as Ctor;
    ctor.items = (item['items'] as any[]).map(i => this.responseToCamelCase(i) as CtorItem);
    return ctor;
  }

  getAll() {
    const items: Ctor[] = [1, 2, 3, 4].map(i => {
      return {
        id: i,
        title: `${i}`,
        subtitle: `${i}`,
        createdAt: new Date(),
        authorName: `${i}`,
        authorId: i,
        thumbId: i,
        tag: `${i}`,
        items:
          [
            {
              id: 1,
              type: CtorItemType.Text,
              value: 'lorem ipsum',
              ctorId: i
            } as CtorItem,
            {
              id: 1,
              type: CtorItemType.Comment,
              value: 'lorem ipsum',
              ctorId: i
            } as CtorItem,
            {
              id: 1,
              type: CtorItemType.H1,
              value: 'lorem ipsum',
              ctorId: i
            } as CtorItem,
          ]
        ,
      } as Ctor;
    });
    setTimeout(() => {
      this.list$.next(items);
    }, 1000);
  }
}
