import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  newUser: User;
  returnUser: User;
  errors;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.newUser = new User();
    this.returnUser = new User();
    // this.findAllUsers();
    this._httpService.logoutUser();
  }

  findAllUsers(){
    this._httpService.findAllUsers().subscribe((allUsers) => {
      console.log(allUsers);
    })
  }

  clickRegister() {
    this._httpService.registerUser(this.newUser).subscribe((registeredUser: any) => {
      console.log('User registered', registeredUser)
      this._router.navigate(['/home'])
    },
    error => {
      this.errors = error;
    })
  }

  clickLogin() {
    this._httpService.loginUser(this.returnUser).subscribe(loggedUser => {
      console.log('Logged in', loggedUser);
      this._router.navigate(['/home']);
    },
    error => {
      this.errors = error;
    })
  }

}
