import { Component } from '@angular/core';
import {Review} from './models/review.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    reviewListMain: Review[] = [
    new Review('A first review of this restaurant. It was good.', '4')
  ];
}
