import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Oauth42Service} from '../services/oauth42.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-oauth42',
  templateUrl: './oauth42.component.html',
  styleUrls: ['./oauth42.component.css']
})
export class Oauth42Component implements OnInit {

  private code: string;
  public status = 'wait...';

  constructor(private route: ActivatedRoute,
              private oauth42Service: Oauth42Service,
              private http: Http) {}

  ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get('code');
    console.log('code: ' + this.code);


    // this.http.get('http://127.0.0.1:5000/oauth42/' + this.code)
    //   .map(res => res.json()) // ...and calling .json() on the response to return data
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
    //   .subscribe(response => {
    //       console.log(response);
    //     }
    //   );


    this.oauth42Service.readOne(this.code)
      .subscribe(response => {
        console.log(response);
        if (response['status'] === 'OK') {
          this.status = 'Authorized)';
        }

      });
  }
}
