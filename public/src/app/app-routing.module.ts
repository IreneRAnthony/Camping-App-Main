import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component'
import { NewLocationComponent } from './new-location/new-location.component';
import { AboutLocationComponent } from './about-location/about-location.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { AboutTripComponent } from './about-trip/about-trip.component';
import { SearchLocationsComponent } from'./search-locations/search-locations.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '/home', component: HomePageComponent},
  { path: 'location/new', component: NewLocationComponent },
  { path: 'new/trip', component: NewTripComponent },
  { path: '/show/trip/:id', component: AboutTripComponent },
  { path: '/searchbar/location/:name', component: SearchLocationsComponent },
  { path: 'about/location/:id', component: AboutLocationComponent },
  { path: 'login', component: LoginRegistrationComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
