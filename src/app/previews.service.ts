import {CardPreviewComponent} from './card-preview/card-preview.component';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class PreviewsService {

  getPreviews() {
    return [new CardPreviewComponent(
      'Movie 1',
      1998,
      100500,
      'assets/img/pic_8.png',
      true),
    ];
    // return [new CardPreviewComponent(),
    //   new CardPreviewComponent(),
    //   new CardPreviewComponent(),
    //   new CardPreviewComponent(),
    //   new CardPreviewComponent()
    // ];
  }
}
