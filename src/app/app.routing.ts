import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FooterComponent } from './footer/footer.component';
import { NewReviewComponent } from './new-review/new-review.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchBarComponent
  },
  {
    path: '',
    component: NavBarComponent
  },
  {
    path: '',
    component: DetailsComponent
  },
  {
    path: '',
    component: PicturesComponent
  },
  {
    path: '',
    component: FooterComponent
  },
  {
    path: 'new-review',
    component: NewReviewComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
