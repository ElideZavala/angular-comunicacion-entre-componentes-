import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-template-vars';

  addNewPicture(gallery: GalleryComponent) {
    console.log('added new picture');
  }

  removeFirstPicture(gallery: GalleryComponent) {
    console.log('removed first picture');
  }
}
