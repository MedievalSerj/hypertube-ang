import {Component, OnInit} from '@angular/core';
import {PreviewsService} from '../previews.service';


@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {

  public previews;

  constructor(previews: PreviewsService) {
    this.previews = previews.getPreviews();
  }

  ngOnInit() {
  }

}
