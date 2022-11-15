import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';
  @ViewChild(GalleryComponent) gallery;

  addNewPicture() {
    // agregamos una imaegn adelante
    this.gallery.picture.unshift(
      this.gallery.generateImage()
    );
  }

  removeFirstPicture() {
    // Eliminamos la primera imagen
    this.gallery.picture.shift();
  }
}
