import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    //User
  registerUser(newUser){
    return this._http.post('/new/user', newUser);
  }

  loginUser(user){
    return this._http.get('/login');
  }

  logoutUser(user){
    return this._http.get('/logout');
  }

  getUserId(){
    return this._http.get('/search/session/user')
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

  updateLocation(location){
    return this._http.put(`/update/location/${location._id}`, location);
  }

  deleteLocation(id){
    return this._http.delete(`/delete/location/${id}`);
  }

  constructor(private _http: HttpClient) { }
}

