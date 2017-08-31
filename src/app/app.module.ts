import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
import {PreviewsService} from './previews.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GalleryComponent,
    CardPreviewComponent,
    GalleryPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PreviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
