import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LanguageService} from '../services/language.service';
import {GlobalVariable} from '../global';
import {SearchProgressService} from '../services/search-progress.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public language = 'en';

  constructor(public authService: AuthService,
              private router: Router,
              private languageService: LanguageService,
              private searchProgressService: SearchProgressService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.languageService.readOne(this.authService.currentUser.user_id)
        .subscribe(res => {
          console.log('User language: ' + res.language);
          this.language = res.language;

        });
    }

    console.log('Document language: ' + document.documentElement.lang);
    // this.redirectToLang();


  }

  redirectToLang() {
    if (document.documentElement.lang === 'en' && this.language === 'ru') {
      GlobalVariable.CURRENT = GlobalVariable.ANGULAR_RU;
      window.location.assign(GlobalVariable.CURRENT);
    } else if (document.documentElement.lang === 'ru' && this.language === 'en') {
      GlobalVariable.CURRENT = GlobalVariable.ANGULAR_EN;
      window.location.assign(GlobalVariable.CURRENT);
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
    this.searchProgressService.showLoader();
    this.searchProgressService.hideNoResults();
    this.router.navigate(['/'],
      {queryParams: {searchWord: searchBox.value}});
    searchBox.value = '';
  }

}
