import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from './data.service';
import {GlobalVariable} from '../global';

@Injectable()
export class WatchedMoviesService extends DataService {

  constructor(http: Http) {
    super(GlobalVariable.FLASK_API_URL + '/watched_movies', http);
  }

}
