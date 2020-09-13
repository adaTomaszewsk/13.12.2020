import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../services/login.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUser;
    if (currentUser) {
      return true;
    }

    this.router.navigate(['/logowanie'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authenticationService.currentUserValue;
  //   if (currentUser) {
  //     console.log("Zalogowany użytkownik");
  //     // check if route is restricted by role
  //     if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
  //       // role not authorised so redirect to home page
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //
  //     // authorised so return true
  //     return true;
  //   }

    // not logged in so redirect to login page with the return url
//     this.router.navigate(['/logowanie'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }
