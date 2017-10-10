import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailConfirmService} from '../services/email-confirm.service';
import {NgModel} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  registered = false;
  confirmed = false;
  confirmed_api = false;
  accessDenied = false;
  token: string;
  login: string;

  public g_url = 'assets/G_100.png';

  invalidLogin = false;

  constructor(private route: ActivatedRoute,
              private emailConfirmService: EmailConfirmService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    let queryParams = this.route.snapshot.queryParamMap;
    this.registered = ('true' === queryParams.get('registered'));
    this.confirmed = ('true' === queryParams.get('confirmed'));
    this.token = queryParams.get('token');
    this.login = queryParams.get('login');
    this.accessDenied = ('true' === queryParams.get('denied'));
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

  signIn(credentials) {
    this.authService.login(credentials).subscribe(
      response => {
        localStorage.setItem('token', response['token']);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      },
      error => {
        if (error.status === 400) {
          this.invalidLogin = true;
          // console.log('catched 401 error');
        } else {
          throw new error;
        }
      });
  }
}
