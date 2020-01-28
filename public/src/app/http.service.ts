import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  registerUser(newUser){
    return this._http.post('/new/user', newUser);
  }

  constructor(private _http: HttpClient) { }
}

