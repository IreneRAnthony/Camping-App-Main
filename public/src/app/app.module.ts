import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagingComponent } from './messaging/messaging.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewLocationComponent } from './new-location/new-location.component';
import { AboutLocationComponent } from './about-location/about-location.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutTripComponent } from './about-trip/about-trip.component';
import { SearchLocationsComponent } from './search-locations/search-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    NewLocationComponent,
    AboutLocationComponent,
    NewTripComponent,
    MessagingComponent,
    RatingsComponent,
    ReviewsComponent,
    HomePageComponent,
    AboutTripComponent,
    SearchLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC59Aftx3_ANjo5qcDseQCr_BVnzUk_CCY'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
