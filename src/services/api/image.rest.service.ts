import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Image } from '../../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageRestService extends RestService<Image> {
  route = '/images';

  constructor(http: HttpClient) {
    super(http);
  }
}
