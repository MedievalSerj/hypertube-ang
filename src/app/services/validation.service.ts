import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';
import {GlobalVariable} from '../global';


@Injectable()
export class ValidationService extends DataService {

  constructor(http: Http) {
    super(GlobalVariable.FLASK_API_URL + '/user_exists', http);
  }
}
