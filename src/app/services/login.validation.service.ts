import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';
import {GlobalVariable} from '../global';


@Injectable()
export class LoginValidationService extends DataService {

  constructor(http: Http) {
    super(http, null);
    this.url = GlobalVariable.FLASK_API_URL + '/user_exists';
  }
}
