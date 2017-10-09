import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {PreviewsService} from '../services/previews.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router,
              private previewsService: PreviewsService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  search(searchBox) {
    this.router.navigate(['/'],
      {queryParams: {searchWord: searchBox.value}});
    // console.log(searchBox.value);
    // this.previewsService.readOne(searchBox.value + '/0/3').
    //   subscribe(response => {
    //     console.log(response['search_results']);
    // });
  }

}
