import {CardPreviewComponent} from './card-preview/card-preview.component';
import {Injectable} from '@angular/core';
import {PREVIEWS} from './mock-previews';

@Injectable()
export class PreviewsService {

    getPreviews(): any[] {
    return PREVIEWS;
  }
}
