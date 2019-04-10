import { Injectable } from '@angular/core';
import { Review } from './models/review.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { REVIEWS } from './mock-reviews';

@Injectable()
export class ReviewService {
  reviews: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.reviews = database.list('reviews');
  }

  getReviews(){
    return this.reviews;
  }
}
