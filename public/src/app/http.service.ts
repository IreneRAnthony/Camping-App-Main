import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// hardcoded location for dummy data
var currentLocation = "07001"

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    //User
  registerUser(newUser){
    return this._http.post('/new/user', newUser);
  }

  loginUser(user){
    return this._http.get('/login/user');
  }

  logoutUser(user){
    return this._http.get('/logout/user');
  }

  getUserId(){
    return this._http.get('/search/session/user')
  }
  
  findUser(id){
    return this._http.get(`/search/user/${id}`)
  }

  updateUser(user){
    return this._http.put(`update/user/${user._id}`, user);
  }

  deleteUser(id){
    return this._http.delete(`/delete/user/${id}`);
  }

    //Trip
  createTrip(newTrip){
    return this._http.post('/new/trip', newTrip);
  }

  getAllTrips(){
    return this._http.get('/all/trip');
  }

  getTrip(id){
    return this._http.get(`/trip/search/${id}`, id);
  }
  
  getUserTrips(){
    return this._http.get('trips/search/user');
  }

  updateTrip(trip){
    return this._http.put(`/update/trip/${trip._id}`, trip)
  }

  deleteTrip(id){
    return this._http.delete(`/delete/trip/${id}`)
  }


    //Task
  getAllTasks(){
    return this._http.get('/all/trip');
  }

  createTask(newTask){
    return this._http.post('/new/task', newTask)
  }

  getTask(id){
    return this._http.get(`/task/search/${id}`);
  }

  updateTask(task){
    return this._http.put(`/update/trip/${task._id}`, task)
  }

  deleteTask(id){
    return this._http.delete(`/delete/task/${id}`)
  }


    //Location
  createLocation(newLocation){
    return this._http.post('/new/location', newLocation);
  }

  getAllLocations(){
    return this._http.get('/all/location');
  }

  getLocation(id){
    return this._http.get(`/search/location/${id}`)
  }
  
  getUserTasks(){
    return this._http.get('/task/search/user');
  }
  
  searchForLocation(name){
    return this._http.get(`/searchbar/location/${name}`)
  }

  updateLocation(location){
    return this._http.put(`/update/location/${location._id}`, location);
  }

  deleteLocation(id){
    return this._http.delete(`/delete/location/${id}`);
  }
  
  
  //Reviews

  createReview(newReview){
    return this._http.post('/new/review', newReview);
  }

  getReview(id) {
    return this._http.get(`/search/review/${id}`)
  }

  updateReview(review){
    return this._http.put(`/update/review/${review._id}`, review)
  }

  deleteReview(id){
    return this._http.delete(`/delete/review/${id}`)
  }
  
  
  //Supplies

  createSupply(newSupply){
    return this._http.post('/new/supply', newSupply)
  }

  getSupply(id){
    return this._http.get(`search/supply/${id}`)
  }
  
  findOneSupply(id){
    return this._http.get(`search/supply/find/${id}`)
  }
  
   completeSupply(supply){
    return this._http.put(`/update/supply/completed/${supply._id}`, supply)
  }

  updateSupply(supply){
    return this._http.put(`/update/supply/${supply._id}`, supply)
  }

  deleteSupply(id){
    return this._http.delete(`/delete/supply/${id}`)
  }
  
  //API Data
  getData(){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${currentLocation}&units=imperial&appid=3c41c77dff28f47ed76644ad09a32429`)
  }

  constructor(private _http: HttpClient) { }
}

