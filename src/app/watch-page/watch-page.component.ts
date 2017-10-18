import {Component, OnInit} from '@angular/core';
import {fade} from '../common/animations';
import {WatchedMoviesService} from '../services/watched-movies.service';
import {JwtHelper} from 'angular2-jwt';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css'],
  animations: [
    fade
  ]
})
export class WatchPageComponent implements OnInit {

  private current_user: any;
  private movie_id : any;

  constructor(private watchedMovieService: WatchedMoviesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.
      subscribe(result => {
        this.movie_id = result['params'].id;
    });
    let token = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    this.current_user = jwtHelper.decodeToken(token);
    this.watchedMovieService.create({
      movie_id: this.movie_id,
      user_id: this.current_user.user_id
    }).subscribe(result => console.log('watched movies updated'));
  }

}
