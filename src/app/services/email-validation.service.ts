import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from './data.service';
import {GlobalVariable} from '../global';


@Injectable()
export class EmailValidationService extends DataService{

  constructor(http: Http) {
    super(http);
    this.url = GlobalVariable.FLASK_API_URL + '/email_exists';
  }

}
