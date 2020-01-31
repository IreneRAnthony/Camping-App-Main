import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  newTrip: Trip;
  errors;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newTrip = new Trip();
  }

  clickCreateTrip(){
    this._httpService.createTrip(this.newTrip).subscribe( (newTrip: any) => {
      if(newTrip.errors){
        this.errors = newTrip.errors;
      } else {
        console.log('Created trip', newTrip);
        this.newTrip = new Trip();
        this._router.navigate(['/home']);
      }
    })
  }

}
