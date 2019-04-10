import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ReviewService } from '../review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css'],
  providers: [ReviewService]
})
export class ShowReviewComponent implements OnInit {

  reviews: FirebaseListObservable<any[]>;

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }

}
