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
import { NewLocationComponent } from './new-location/new-location.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { AboutLocationComponent } from './about-location/about-location.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentComponent } from './document/document.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    MessagingComponent,
    RatingsComponent,
    ReviewsComponent,
    NewLocationComponent,
    NewTripComponent,
    AboutLocationComponent,
    DocumentListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
