import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  registered = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.registered = ('true' === this.route.snapshot.queryParamMap.get('registered'));
  }

}
