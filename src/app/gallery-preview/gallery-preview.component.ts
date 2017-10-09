import {Component, OnInit} from '@angular/core';
import {PreviewsService} from '../services/previews.service';
import {CardPreviewComponent} from '../card-preview/card-preview.component';
import {isUndefined} from 'util';


@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {

  public previews: any[] = [];
  public previews_backup: any[] = [];
  public searchword = null;
  private per_page = 3;
  public more_results_disabled = false;

  constructor(private preview_service: PreviewsService) {
  }

  ngOnInit() {
    this.preview_service.readOne('0/' + this.per_page)
      .subscribe(response => {
        this.previews = response['search_results'];
        this.previews.sort(this.comp_title_asc);
        this.previews_backup = this.previews;
      });
  }

  getMore() {
    if (!this.searchword) {
      let from = this.previews.length;
      let to = from + this.per_page;
      console.log('from: ' + from);
      console.log('to: ' + to);
      this.preview_service.readOne(from + '/' + to)
        .subscribe(response => {
          console.log(response['search_results']);
          let search_results  = response['search_results'];
          search_results.sort(this.comp_title_asc);
          this.previews = this.previews.concat(search_results);
          this.previews_backup = this.previews.concat(search_results);
          if (search_results.length < this.per_page) {
            this.more_results_disabled = true;
          }
        });
    }
  }

  sort(param, order) {
    if (param === 'title') {
      if (order)
        this.previews.sort(this.comp_title_asc);
      else
        this.previews.sort(this.comp_title_dec);
    } else if (param === 'genre') {
      if (order)
        this.previews.sort(this.comp_genre_asc);
      else
        this.previews.sort(this.comp_genre_dec);
    } else if (param === 'rating') {
      if (order)
        this.previews.sort(this.comp_rating_asc);
      else
        this.previews.sort(this.comp_rating_dec);
    } else if (param === 'year') {
      if (order)
        this.previews.sort(this.comp_year_asc);
      else
        this.previews.sort(this.comp_year_dec);
    }
  }

  apply_filter(title,
               genre,
               rating_from,
               rating_to,
               year_from,
               year_to) {
    this.previews = this.previews_backup;
    if (!isUndefined(title) && title !== '') {
      this.previews = this.previews_backup.filter(item => item.title.indexOf(title) !== -1);
    }
    if (!isUndefined(genre) && genre !== '') {
      this.previews = this.previews.filter(item => item.genre.indexOf(genre) !== -1);
    }
    if (!isUndefined(rating_from) && rating_from !== '') {
      let n = parseInt(rating_from);
      this.previews = this.previews.filter(item => item.rating >= n);
    }
    if (!isUndefined(rating_to) && rating_to !== '') {
      let n = parseInt(rating_to);
      this.previews = this.previews.filter(item => item.rating <= n);
    }
    if (!isUndefined(year_from) && year_from !== '') {
      let n = parseInt(year_from);
      this.previews = this.previews.filter(item => item.year >= n);
    }
    if (!isUndefined(year_to) && year_to !== '') {
      let n = parseInt(year_to);
      this.previews = this.previews.filter(item => item.year <= n);
    }
  }

  reset_filters() {
    this.previews = this.previews_backup;
  }

  comp_title_asc(param1, param2) {
    if (param1.title < param2.title)
      return -1;
    else if (param1.title > param2.title)
      return 1;
    else
      return 0;
  }

  comp_title_dec(param1, param2) {
    if (param1.title > param2.title)
      return -1;
    else if (param1.title < param2.title)
      return 1;
    else
      return 0;
  }

  comp_genre_asc(param1, param2) {
    if (param1.genre < param2.genre)
      return -1;
    else if (param1.genre > param2.genre)
      return 1;
    else
      return 0;
  }

  comp_genre_dec(param1, param2) {
    if (param1.genre > param2.genre)
      return -1;
    else if (param1.genre < param2.genre)
      return 1;
    else
      return 0;
  }

  comp_rating_asc(param1, param2) {
    if (param1.rating < param2.rating)
      return -1;
    else if (param1.rating > param2.rating)
      return 1;
    else
      return 0;
  }

  comp_rating_dec(param1, param2) {
    if (param1.rating > param2.rating)
      return -1;
    else if (param1.rating < param2.rating)
      return 1;
    else
      return 0;
  }

  comp_year_asc(param1, param2) {
    if (param1.year < param2.year)
      return -1;
    else if (param1.year > param2.year)
      return 1;
    else
      return 0;
  }

  comp_year_dec(param1, param2) {
    if (param1.year > param2.year)
      return -1;
    else if (param1.year < param2.year)
      return 1;
    else
      return 0;
  }
}
