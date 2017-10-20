import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';
import {GlobalVariable} from '../global';

@Injectable()
export class EmailConfirmService extends DataService {

  constructor(http: Http) {
    super(http);
    this.url = GlobalVariable.FLASK_API_URL + '/confirm_email';
  }

}
