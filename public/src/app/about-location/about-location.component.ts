import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-location',
  templateUrl: './about-location.component.html',
  styleUrls: ['./about-location.component.css']
  
})
export class AboutLocationComponent implements OnInit {
  lat;
  lon;
  mapUrl;
  sunrise;
  sunset;
  currentLocation: any = { name: "Yosemite National Park",
                      description: "A nice park",
                    address: "9035 Village Dr Yosemite Valley CA 95389"}
  data: any = {}
  zip
  review = {rating: "8",
            reviewText: "BROSEMITE AHAHAH",
            reviewAuthor: "Spooky"}
  allAdvice = {tip: "Don't eat the yellow snow"}

  constructor(private _router: Router,
    private _route: ActivatedRoute,private _httpService: HttpService) { }

  ngOnInit() {
    this.currentlocation()
    this.getWeather()
  }
  currentlocation(){
    this.zip = "95389"
  }
  getWeather(){
    
    this._httpService.getData()
    .subscribe((data:any) =>{
        this.lat = data.coord.lat
        this.lon = data.coord.lon
        this.data = data
        var date2 = new Date(data.sys.sunset * 1000)
        var hours2 = date2.getHours()
        var minutes2 = "0" + date2.getMinutes();
        this.sunset = hours2 - 12 + ':' + minutes2.substr(-2)
        var date = new Date(data.sys.sunrise * 1000)
        var hours = date.getHours()
        var minutes = "0" + date.getMinutes();
        this.sunrise = hours + ':' + minutes.substr(-2)
        console.log(this.data)
    })
  }
  }
