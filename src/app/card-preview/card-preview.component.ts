import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {

  // is_seen: boolean;
  // title: string;
  // year: number;
  // rating: number;
  // img_url: string;

  // public is_seen = true;
  // public title = 'Yet another movie';
  // public year = 2016;
  // public rating = 1233;
  // public img_url = 'assets/img/pic_8.png';


  // constructor(title: string,
  //             year: number,
  //             rating: number,
  //             img_url: string,
  //             is_seen: boolean) {
  //   this.is_seen = is_seen;
  //   this.title = title;
  //   this.year = year;
  //   this.rating = rating;
  //   this.img_url = img_url;
  // }


  constructor(public title: string,
              public year: number,
              public rating: number,
              public img_url: string,
              public is_seen: boolean) {
  }

  ngOnInit() {
  }
}
