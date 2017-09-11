import {Injectable} from '@angular/core';
import {PREVIEWS} from '../mock-previews';

@Injectable()
export class PreviewsService {

    getPreviews(): any[] {
    return PREVIEWS;
  }
}
