import {Component, OnInit} from '@angular/core';
import {PreviewsService} from '../services/previews.service';
import {CardPreviewComponent} from '../card-preview/card-preview.component';


@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {

  public previews: any[] = [];

  constructor(private preview_service: PreviewsService) {
  }


  ngOnInit() {
    this.preview_service.readAll()
      .subscribe(response => {
        console.log(response['search_results']);
        this.previews = response['search_results'];
      });
  }
}
