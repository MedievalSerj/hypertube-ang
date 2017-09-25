import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
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
    // let headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource))
      .map(responce => responce.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(responce => responce.json())
      .catch(this.handleError);
  }

  // upload(fileToUpload) {
  //   let input = new FormData();
  //   input.append('file', fileToUpload);
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   // let options = new RequestOptions({ headers: headers });
  //   return this.http.post(this.url, input, { headers: headers })
  //     .map(responce => responce.json())
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    return Observable.throw(new Error());
  }


}
