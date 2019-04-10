import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FooterComponent } from './footer/footer.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    DetailsComponent,
    AddReviewComponent,
    PicturesComponent,
    FooterComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
