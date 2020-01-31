import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Supply } from '../models/supply';


@Component({
  selector: 'app-about-trip',
  templateUrl: './about-trip.component.html',
  styleUrls: ['./about-trip.component.css']
})
export class AboutTripComponent implements OnInit {
  currentTrip;
  newSupply: Supply;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newSupply = new Supply();
    this.getTrip();
  }

  getTrip(){
    this._route.params.subscribe((params)=>{
      console.log(params.id)
      this._httpService.getTrip(params.id)
      .subscribe((data) => {
        this.currentTrip = data;
      })
    })
  }

  clickToDelete(){
    console.log(this.currentTrip, ' is going to be deleted.');
    this._httpService.deleteTrip(this.currentTrip._id).subscribe((deletedTrip)=>{
      console.log('Trip has been deleted.', deletedTrip);
    })
    this._router.navigate(['/home']);
  }

  addToSupply(){
    this._httpService.createSupply(this.newSupply).subscribe((newSupply) => {
      this.currentTrip.supply_list.push(newSupply);
      this.newSupply = new Supply();
      this.getTrip();
    })
  }

  deleteSupply(supplyId){
    this._httpService.deleteSupply(supplyId).subscribe((deletedSupply) => {
      console.log('Deleted,', supplyId);
      this.getTrip();
    })
  }

  completeSupply(supplyId){
    this._httpService.findOneSupply(supplyId).subscribe((supply) => {
      this._httpService.completeSupply(supply).subscribe((updatedSupply) => {
        console.log('Completed!', updatedSupply);
      })
    })
    this.getTrip();
  }

}
