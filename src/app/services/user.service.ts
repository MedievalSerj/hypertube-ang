import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {GlobalVariable} from '../global';
import {Http} from '@angular/http';


@Injectable()
export class UserService extends DataService {

  constructor(http: Http) {
    super(GlobalVariable.FLASK_API_URL + '/user', http);
  }
}
