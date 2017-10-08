import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryPreviewComponent} from '../gallery-preview/gallery-preview.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @ViewChild(GalleryPreviewComponent) galleryPreview;

  title_filter: string;
  genre_filter: string;
  rating_filter_from: string;
  rating_filter_to: string;
  year_filter_from: string;
  year_filter_to: string;

  title_order = true;
  genre_order = true;
  rating_order = true;
  year_order = true;

  constructor() {
  }

  ngOnInit() {
  }

  debugPrint() {

  }


}
