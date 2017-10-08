import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryPreviewComponent} from '../gallery-preview/gallery-preview.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @ViewChild(GalleryPreviewComponent) galleryPreview;
  title_order = true;
  genre_order = true;
  rating_order = true;
  year_order = true;

  constructor() { }

  orderby(param, order) {
    this.galleryPreview.sort(param, order);
  }

  ngOnInit() {
  }

}
