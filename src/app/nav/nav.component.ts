import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {PreviewsService} from '../services/previews.service';
import {LanguageService} from '../services/language.service';
import {GlobalVariable} from '../global';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public language = 'en';

  constructor(public authService: AuthService,
              private router: Router,
              private languageService: LanguageService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.languageService.readOne(this.authService.currentUser.user_id)
        .subscribe(res => {
          this.language = res.language;
        });
    }

    console.log('Document language: ' + document.documentElement.lang);
    // this.redirectToLang();


  }

  redirectToLang() {
    if (document.documentElement.lang === 'en' && this.language === 'ru') {
      window.location.assign(GlobalVariable.ANGULAR_RU);
    } else if (document.documentElement.lang === 'ru' && this.language === 'en') {
      window.location.assign(GlobalVariable.ANGULAR_EN);
    }
  }

  setEn() {
    if (this.language !== 'en') {
      let resource = {
        user_id: this.authService.currentUser.user_id,
        language: 'en'
      };
      this.languageService.update(resource)
        .subscribe(res => {
          this.language = 'en';
          this.redirectToLang();
        });
    }
  }

  setRu() {
    if (this.language !== 'ru') {
      let resource = {
        user_id: this.authService.currentUser.user_id,
        language: 'ru'
      };
      this.languageService.update(resource)
        .subscribe(res => {
          this.language = 'ru';
          this.redirectToLang();
        });
    }
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  search(searchBox) {
    this.router.navigate(['/'],
      {queryParams: {searchWord: searchBox.value}});
    searchBox.value = '';
  }

}
