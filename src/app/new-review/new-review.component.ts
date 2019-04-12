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

  stars: string[] = ["1", "2", "3", "4", "5"];
  selectedEntry: string;

  onSelection(entry) {
      this.selectedEntry = entry.target.value;
  }

  submitForm(review: string){
    var newReview: Review = new Review(review, this.selectedEntry);
    this.reviewService.addReviews(newReview);
  }

}
