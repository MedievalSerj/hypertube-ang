import {Component, OnInit} from '@angular/core';
import {expandCollapse, fade} from '../common/animations';
import {WatchedMoviesService} from '../services/watched-movies.service';
import {JwtHelper} from 'angular2-jwt';
import {ActivatedRoute, Router} from '@angular/router';
import {WatchService} from '../services/watch.service';
import {GlobalVariable} from '../global';


@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css'],
  animations: [
    fade,
    expandCollapse
  ]
})
export class WatchPageComponent implements OnInit {
  public showAbout = true;
  public showSummary = true;
  public movie;
  private current_user: any;
  private movie_id: any;
  src_txt = '720p';
  src;
  sources = [];

  constructor(private watchedMovieService: WatchedMoviesService,
              private route: ActivatedRoute,
              private watchService: WatchService,
              private router: Router) {
  }

  ngOnInit() {
    this.movie = JSON.parse(localStorage.getItem('movie'));

    console.log(this.movie);

    // if (this.movie == null) {
    //   this.router.navigate(['/ooops']);
    // }


    this.route.paramMap.subscribe(result => {
      this.movie_id = result['params'].id;
    });

    let token = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    this.current_user = jwtHelper.decodeToken(token);
    this.watchedMovieService.create({
      movie_id: this.movie_id,
      user_id: this.current_user.user_id
    }).subscribe();

    // this.sources = [
    //   'http://localhost:5000/static/video/Cult.Of.Chucky.2017.720p.BluRay.x264-[YTS.AG].mp4',
    //   'http://localhost:5000/static/video/Cult.Of.Chucky.2017.1080p.BluRay.x264-[YTS.AG].mp4'
    // ];

    // this.src = this.sources[0];

    // console.log('magnt_720: ' + encodeURIComponent(this.movie.magnt_1080));

    this.watchService.readOne(this.movie_id + '/' + this.movie.title +
      '/' + encodeURIComponent(this.movie.magnt_720) + '/' + encodeURIComponent(this.movie.magnt_1080))
      .subscribe(res => {
        // console.log(res);
        // setTimeout(() => {
          for (let i=0; i<res.movie_url.length; i++) {
            this.sources.push(GlobalVariable.NODE_API_URL + '/' + res.movie_url[i])
          }
          // console.log('srcs: ' + this.sources);
          this.src = this.sources[0];
        // }, 5000);



      });


    // this.watchService.readOne(this.movie_id + '/' + this.movie.title +
    //   '/' + this.movie.magnet_720 + '/' + this.movie.magnet_1080)
    //   .subscribe(res => {
    //     for (let i=0; i<res.movie_url.length; i++) {
    //       this.sources.push(GlobalVariable.NODE_API_URL + res.movie_url[i])
    //     }
    //     this.src = this.sources[0];
    //   });

    localStorage.removeItem('movie');
  }

  selectSrc() {
    if (this.sources.length > 1) {
      if (this.src === this.sources[0]) {
        this.src = this.sources[1];
        this.src_txt = '1080p';
      } else {
        this.src = this.sources[0];
        this.src_txt = '720p';
      }
    }
    console.log('new src: ' + this.src);
  }

  show_hide_summary() {
    return this.showSummary = !this.showSummary;
  }

  show_hide_about() {
    return this.showAbout = !this.showAbout;
  }
}
