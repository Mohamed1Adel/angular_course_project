import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 private isLoggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }


  login(username: string, password: string) {
    // Call login API, and get Access Token
    let userToken = '123456789';
    localStorage.setItem('token', userToken);
    this.isLoggedSubject.next(true);
  }
  logout() {
    localStorage.removeItem('token');
        this.isLoggedSubject.next(false);

  }

  get isUserLogged():boolean {
    return (localStorage.getItem('token')) ? true : false;
  }

  getloggedStatus() :Observable<boolean>{
    return this.isLoggedSubject.asObservable();
  }
}
