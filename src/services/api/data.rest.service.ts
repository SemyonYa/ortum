import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Person } from 'src/models/Person';
import { Image } from 'src/models/Image';
import { Service } from 'src/models/Service';
import { Program } from 'src/models/Program';
import { Ctor } from 'src/models/Ctor';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private route: string = '/data';
  private get url(): string { return `${environment.baseUrl}${this.route}`; }

  constructor(private http: HttpClient) { }

  /*
    GET DATA METHODS
  */

  /* PRIMARY DATA ------------------ */

  getInfo() {
    this.http.get<{ aboutPage: Ctor, licensePath: string, licenseThumbPath: string, pricePath: string, regions: {}[], contacts: {}[] }>(`${this.url}/`)
  }

  /* LISTS ------------------------- */

  getPersonal() {
    this.http.get<Person[]>(`${this.url}/`)
  }

  getPositions() {
    this.http.get<Ctor[]>(`${this.url}/`)
  }

  getGalery() {
    this.http.get<Image[]>(`${this.url}/`)
  }

  getServices() {
    this.http.get<Service[]>(`${this.url}/`)
  }

  getPrograms() {
    this.http.get<Program[]>(`${this.url}/`)
  }

  getArticles() {
    this.http.get<Ctor[]>(`${this.url}/`)
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
