import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userId;
  trips: any;
  allTasks: any;
  allLocations;
  currentUser;
  searchTerm;

  constructor(private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newTask = new Task();
    this.getUserId();
    this.getTrips();
    this.getAllLocations();
    this.getUser();
  }

  getUserId(){
    this._httpService.getUserId().subscribe((userId) => {
      console.log('User id found!', userId);
      this.userId = userId;
    })
  }

  getUser(){
    this._httpService.findUser(this.userId).subscribe((user)=>{
      console.log("Found current user!");
      this.currentUser = user;
    })
  }

  getTrips(){
    this._httpService.getUserTrips().subscribe((userTrips: any[]) => {
      console.log('Got trips!', userTrips);
      this.trips = userTrips;
    })
  }

  getAllLocations(){
    this._httpService.getAllLocations().subscribe((locations: any[]) => {
      console.log('Got all locations!', locations);
      this.allLocations = locations;
    })
  }

  clickToSearch(){
    this._router.navigate(['/searchbar/location/' + this.searchTerm]);
  }

}
