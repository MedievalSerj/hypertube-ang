import {Component, OnInit} from '@angular/core';
import {PreviewsService} from '../previews.service';
import {CardPreviewComponent} from '../card-preview/card-preview.component';


@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {

  public previews: CardPreviewComponent[] = [];

  constructor(private preview_service: PreviewsService) {
  }

  getPreviews(): void {
    this.previews = this.preview_service.getPreviews();
  }

  ngOnInit() {
    this.getPreviews();
  }
}
