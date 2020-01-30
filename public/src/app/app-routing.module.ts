import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component'
import { NewLocationComponent } from './new-location/new-location.component';
import { AboutLocationComponent } from './about-location/about-location.component';
import { NewTripComponent } from './new-trip/new-trip.component';

const routes: Routes = [
  { path: 'new/location', component: NewLocationComponent },
  { path: 'new/trip', component: NewTripComponent },
  { path: 'about/location/:id', component: AboutLocationComponent },
  { path: 'login', component: LoginRegistrationComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
