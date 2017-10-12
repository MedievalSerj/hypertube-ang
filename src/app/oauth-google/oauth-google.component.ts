import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OauthGoogleService} from '../services/oauth-google.service';

@Component({
  selector: 'app-oauth-google',
  templateUrl: './oauth-google.component.html',
  styleUrls: ['./oauth-google.component.css']
})
export class OauthGoogleComponent implements OnInit {

  private code: string;
  public status = 'wait...';

  constructor(private route: ActivatedRoute,
              private oauth_google_service: OauthGoogleService,
              private router: Router) { }

  ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get('code');
    console.log('code: ' + this.code);



    this.oauth_google_service.create({code: this.code})
      .subscribe(response => {
        console.log(response);
        if (response['token']) {
          localStorage.setItem('token', response['token']);
          this.router.navigate(['/']);
        } else {
          this.status = 'Unauthorized(';
        }
      }, error => {
          this.status = 'Unauthorized(';
      });
  }

}
