import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NewReviewComponent } from './new-review/new-review.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component'


const appRoutes: Routes = [
  {
    path: '',
    component: RestaurantPageComponent
  },
  {
    path: 'new-review',
    component: NewReviewComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
