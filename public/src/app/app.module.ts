import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagingComponent } from './messaging/messaging.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    MessagingComponent,
    RatingsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
