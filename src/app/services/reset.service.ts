import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';
import {GlobalVariable} from '../global';

@Injectable()
export class ResetService extends DataService {

  constructor(http: Http) {
    super(GlobalVariable.FLASK_API_URL + '/reset', http);
  }

}
