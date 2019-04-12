import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model'
import { ReviewService} from '../review.service'

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css'],
  providers: [ReviewService]
})
export class NewReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  // selectedEntry: string;
  //
  //   onSelection(entry) {
  //       this.selectedEntry = entry;
  //   }

  submitForm(review: string, stars: string){
    var newReview: Review = new Review(review, stars);
    this.reviewService.addReviews(newReview);
  }

}
