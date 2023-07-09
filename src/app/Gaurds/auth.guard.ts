import { UserLoginService } from './../Services/user-login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserLoginService,
              private router:Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (this.authService.isUserLogged) {
      return true;
    } else {
      // alert("you must login first ...")
      this.router.navigate(['/Login'] )
      return false;
    }

  }

}
