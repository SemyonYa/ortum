import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Person } from 'src/models/Person';
import { Image } from 'src/models/Image';
import { Service } from 'src/models/Service';
import { Program } from 'src/models/Program';
import { Ctor } from 'src/models/Ctor';
import { Filial } from 'src/models/Filial';
import { map } from 'rxjs/operators';

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

  getAbout() {
    return this.http.get<Ctor>(`${this.url}/about`)
      .pipe(
        map(item => this.responseToCamelCase(item))
      )
  }

  getPersonal() {
    return this.http.get<Person[]>(`${this.url}/personal`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
      )
  }

  getPositions() {
    return this.http.get<Ctor[]>(`${this.url}/positions`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
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

  getArticles() {
    return this.http.get<Ctor[]>(`${this.url}/articles`)
      .pipe(
        map((items: any[]) => items.map(item => this.responseToCamelCase(item)))
      )
  }

  getArticle(id: number) {
    return this.http.get<Ctor>(`${this.url}/article/${id}`)
      .pipe(
        map(item => this.responseToCamelCase(item))
      )
  }

  /* 
    COMMON METHODS
  */

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
