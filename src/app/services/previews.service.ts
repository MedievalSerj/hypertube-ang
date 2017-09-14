import {Injectable} from '@angular/core';
import {PREVIEWS} from '../mock-previews';
import {DataService} from './data.service';
import {Http} from '@angular/http';

@Injectable()
export class PreviewsService extends DataService {

  constructor(http: Http) {
    super('http://127.0.0.1:5000/search/0/8', http);
  }

  // getPreviews(): any[] {
  //   return PREVIEWS;
  // }
}
