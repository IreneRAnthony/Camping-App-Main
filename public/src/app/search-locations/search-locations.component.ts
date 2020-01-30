import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-locations',
  templateUrl: './search-locations.component.html',
  styleUrls: ['./search-locations.component.css']
})
export class SearchLocationsComponent implements OnInit {
  locations: any;
  searchedLocation: any;
  searchTerm;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getLocation();
    this.getAllLocations();
  }

  getAllLocations(){
    this._route.params.subscribe((params) => {
      console.log(params.name)
      this._httpService.searchForLocation(params.name)
      .subscribe((data: any[]) => {
        this.locations = data;
      })
    })
  }

  getLocation(){
    this._route.params.subscribe((params) => {
      console.log(params.name)
      this.searchedLocation = params;
    })
  }

  clickToSearch(){
    this._router.navigate(['/searchbar/location/' + this.searchTerm]);
  }


}
