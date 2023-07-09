import { UserLoginService } from './../../Services/user-login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  isUserLogged: boolean=false;
  constructor(private authService:UserLoginService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isUserLogged = this.authService.isUserLogged;
  }
  login() {
    this.authService.login("UserName", "Password");
        this.isUserLogged = this.authService.isUserLogged;

  }
  logout() {
    this.authService.logout();
        this.isUserLogged = this.authService.isUserLogged;


  }

}
