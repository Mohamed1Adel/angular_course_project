import { UserLoginService } from './../../Services/user-login.service';
 import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLogged: boolean = false;
    constructor(private authService:UserLoginService) {

    }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.isUserLogged = this.authService.isUserLogged;
    this.authService.getloggedStatus().subscribe(status => { this.isUserLogged = status });
  }



}
