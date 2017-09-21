import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';
import {GlobalVariable} from '../global';

@Injectable()
export class PreviewsService extends DataService {

  constructor(http: Http) {
    super(GlobalVariable.NODE_API_URL + '/search/0/8', http);
  }
}
