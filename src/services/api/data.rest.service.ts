import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Person } from 'src/models/Person';
import { Image } from 'src/models/Image';
import { Service } from 'src/models/Service';
import { Program } from 'src/models/Program';
import { Ctor, CtorItem } from 'src/models/Ctor';
import { Filial } from 'src/models/Filial';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private route: string = '/public-data';
  private get url(): string { return `${environment.baseUrl}${this.route}`; }

  constructor(private http: HttpClient) { }

  /*
    GET DATA METHODS
  */

  /* PRIMARY DATA ------------------ */

  /**
   * ID = 1 - Moscow
   * ID = 2 - Norilsk
   */
  getInfo() {
    this.http.get<{ licensePath: string, licenseThumbPath: string, pricePath: string, filials: Filial[] }>(`${this.url}/info}`)
  }

  /* LISTS ------------------------- */
  // TODO: ctorConstructor for every method map
  
  getAbout() {
    return this.http.get<Ctor>(`${this.url}/about`)
      .pipe(
        map(item => this.responseToCamelCase(item) as Ctor)
      )
  }

  getPersonal(): Observable<Ctor[]> {
    return this.http.get<Person[]>(`${this.url}/personal`)
      .pipe(
        map((items: any[]) => items.map(this.ctorConstructor))
      )
  }

  getPositions(): Observable<Ctor[]> {
    return this.http.get<Ctor[]>(`${this.url}/positions`)
      .pipe(
        map((items: any[]) => items.map(this.ctorConstructor))
      )
  }

  getGalery() {
    return this.http.get<Image[]>(`${this.url}/galery`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
      )
  }

  getServices() {
    return this.http.get<Service[]>(`${this.url}/services`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
      )
  }

  getPrograms() {
    return this.http.get<Program[]>(`${this.url}/programs`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
      )
  }

  getArticles(): Observable<Ctor[]> {
    return this.http.get<Ctor[]>(`${this.url}/articles`)
      .pipe(
        map(
          (items: any[]) => {
            return items.map(
              item => {
                let ctor = this.responseToCamelCase(item) as Ctor;
                ctor.thumb = new Image(item.thumb.id, item.thumb.name)
                return ctor;
              }
            );
          }
        )
      )
  }

  getArticle(id: number): Observable<Ctor> {
    return this.http.get<Ctor>(`${this.url}/article/${id}`)
      .pipe(
        map(item => {
          let ctor = this.responseToCamelCase(item) as Ctor;
          ctor.thumb = new Image(item.thumb.id, item.thumb.name)
          return ctor;
        })
      )
  }


  /* 
    COMMON METHODS
  */

  ctorConstructor = (item: any) => {
    let ctor = this.responseToCamelCase(item) as Ctor;

    if (item.thumb?.id) {
      ctor.thumb = new Image(item.thumb.id, item.thumb.name);
    }

    if (ctor.items) {
      const ctorItems = [];
      ctor.items = item.items.map(i => {
        let ctorItem = this.responseToCamelCase(i) as CtorItem;
        ctorItem.image = new Image(i.image.id, i.image.name);
      });
    }

    return ctor;
  }

  handleError = (err: HttpErrorResponse) => {
    let errorText: string;

    if (err.status === 422) {
      errorText = (err.error as any[]).map(e => e.message).join('\n');
    }
    else if (err.status < 500 && err.status >= 400) {
      errorText = err.message;
    } else {
      errorText = 'It\'s a SAD  :-(';
    }

    // TODO
    console.log(errorText);
  }

  protected formValueToSnake(formValue: any) {
    let newValue = {};
    for (let key in formValue) {
      newValue[key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)] = (typeof formValue[key] === 'boolean')
        ? 1
        : formValue[key]
    }
    return newValue;
  }

  protected responseToCamelCase(response: any) {
    var newObj = {};
    for (let d in response) {
      if (response.hasOwnProperty(d)) {
        newObj[d.replace(/(\_\w)/g, function (k) {
          return k[1].toUpperCase();
        })] = response[d];
      }
    }
    return newObj;
  }
}
