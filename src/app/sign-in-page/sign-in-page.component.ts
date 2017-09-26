import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmailConfirmService} from '../services/email-confirm.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  registered = false;
  confirmed = false;
  confirmed_api = false;
  token: string;
  login: string;

  constructor(private route: ActivatedRoute,
              private emailConfirmService: EmailConfirmService) { }

  ngOnInit() {
    let queryParams = this.route.snapshot.queryParamMap;
    this.registered = ('true' === queryParams.get('registered'));
    this.confirmed = ('true' === queryParams.get('confirmed'));
    this.token = queryParams.get('token');
    this.login = queryParams.get('login');
    if (this.confirmed) {
      this.emailConfirmService.readOne(this.login + '/' + this.token)
        .subscribe(response => {
          console.log(response['confirmed']);
          if (response['confirmed'] == true) {
            console.log('just nice bp');
            this.confirmed_api = true;
          }
        });
    }
  }

}
