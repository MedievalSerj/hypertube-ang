import { Component, OnInit } from '@angular/core';
import {fade} from '../common/animations';
import {WatchedMoviesService} from '../services/watched-movies.service';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css'],
  animations: [
    fade
  ]
})
export class WatchPageComponent implements OnInit {

  constructor(private watchedMovieService: WatchedMoviesService) { }

  ngOnInit() {


    // this.watchedMovieService.create();
  }

}
