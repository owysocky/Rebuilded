import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model'

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(review: string, stars: string){
    var newReview: Review = new Review(review, stars);
    console.log(newReview);
  }

}
