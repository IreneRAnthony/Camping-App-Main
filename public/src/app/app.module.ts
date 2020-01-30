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

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    NewLocationComponent,
    AboutLocationComponent,
    NewTripComponent,
    MessagingComponent,
    RatingsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5vuY2bSP_SK1a4n9lBZCTZC_syn5DmJc'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
