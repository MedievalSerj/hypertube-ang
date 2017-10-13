import { Component, OnInit } from '@angular/core';
import {fade} from '../common/animations';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.css'],
  animations: [
    fade
  ]
})
export class WatchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
