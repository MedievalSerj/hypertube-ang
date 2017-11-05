import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  url: string;

  constructor(private http: Http) {
  }

  readAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  readOne(id) {
    return this.http.get(this.url + '/' + id)
      .map(responce => responce.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.user_id, resource)
      .map(responce => responce.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(responce => responce.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log('DATA IS SUPPER');
    return Observable.throw(new Error());
  }
}
