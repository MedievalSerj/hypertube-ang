import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {

  // private is_seen: boolean;
  // private title: string;
  // private year: number;
  // private rating: number;

  public is_seen = true;
  public title = 'Yet another movie';
  public year = 2016;
  public rating = 1233;
  public img_url = 'assets/img/pic_8.png';

  constructor() { }

  ngOnInit() {
  }
}
