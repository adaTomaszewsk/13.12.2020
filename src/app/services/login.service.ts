import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models';
import {LoginInterface} from '../login/login.interface';
import {Role} from '../models/role';
import {Router} from '@angular/router';
import {SessionStorageService} from './session-storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly LOGGED_USER = 'user';
  user: User;

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient,
              private storageService: SessionStorageService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(this.getUserFromStorage());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): any {
    return this.http.post<any>('http://localhost:8080/api/login', {email, password})
      .pipe(
        map(userData => {
          this.storageService.set(this.LOGGED_USER, userData);
          this.currentUserSubject.next(userData);
          return userData;
        })
      );
  }

  // login(email: string, password: string): Observable<LoginInterface> {
  //       return this.http.post<LoginInterface>('http://localhost:8080/api/login',
  //         {email, password})
  //         .pipe(map((user: User) => {
  //           // login successful if there's a jwt token in the response
  //           if (user && user.token) {
  //             // store user details and jwt token in local storage to keep user logged in between page refreshes
  //             localStorage.setItem('currentUser', JSON.stringify(user));
  //             this.currentUserSubject.next({
  //               userRoles: user.userRoles,
  //               token: user.token,
  //               name: user.name,
  //               surname: user.surname,
  //               email: user.email,
  //               id: user.id,
  //               password: user.password,
  //               tokenType: user.tokenType
  //             });
  //           }
  //           return user;
  //         }));
  //     }


  logout(): void {
    this.http.post<any>('/api/logout', {}).subscribe(() => {
        this.removeCurrentUserFromStorageAndRedirect();
      },
      () => {
        this.removeCurrentUserFromStorageAndRedirect();
      }
    );
  }

  getLoggedUser(): User {
    return this.getUserFromStorage();
  }

  isUserLoggedIn(): boolean {
    return this.getUserFromStorage() !== null;
  }

  private removeCurrentUserFromStorageAndRedirect(): void {
    sessionStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/logowanie']);
  }

  private getUserFromStorage(): User {
    return this.storageService.get(this.LOGGED_USER);
  }


  // private readonly LOGGED_USER = 'user';
  //
  // public currentUser: Observable<User>;
  // private currentUserSubject: BehaviorSubject<User>;
  //
  // // constructor(private http: HttpClient,
  // //             // private storageService: SessionStorageService,
  // //             private router: Router) {
  // //   this.currentUserSubject = new BehaviorSubject<User>(this.getUserFromStorage());
  // //   this.currentUser = this.currentUserSubject.asObservable();
  // // }
  //
  // constructor(private http: HttpClient) {
  //   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //   this.currentUser = this.currentUserSubject.asObservable();
  // }
  //
  // get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }
  //
  // login(email: string, password: string): Observable<LoginInterface> {
  //     return this.http.post<LoginInterface>('http://localhost:8080/api/login',
  //       {email, password})
  //       .pipe(map((user: LoginInterface) => {
  //         // login successful if there's a jwt token in the response
  //         if (user && user.token) {
  //           // store user details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //           this.currentUserSubject.next({
  //             name: user.name, surname: user.surname, tokenType: user.tokenType, userRoles: user.userRoles,
  //             email,
  //             id: user.id,
  //             password,
  //             token: user.token,
  //
  //           });
  //         }
  //         return user;
  //       }));
  //   }
  //
  //   logout() {
  //     localStorage.removeItem('currentUser');
  //     this.currentUserSubject.next(null);
  //   }






  // login(username: string, password: string): any {
  //   return this.http.post<any>('/api/login', {username, password})
  //     .pipe(
  //       map(userData => {
  //         // this.storageService.set(this.LOGGED_USER, userData);
  //         this.currentUserSubject.next(userData);
  //         return userData;
  //       })
  //     );
  // }


  // getLoggedUser(): User {
  //   return this.getUserFromStorage();
  // }
  //
  // isUserLoggedIn(): boolean {
  //   return this.getUserFromStorage() !== null;
  // }

  // private removeCurrentUserFromStorageAndRedirect(): void {
  //   // sessionStorage.clear();
  //   this.currentUserSubject.next(null);
  //   this.router.navigate(['/login']);
  // }

  // private getUserFromStorage(): User {
  //   // return this.storageService.get(this.LOGGED_USER);
  // }
}







  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  //
  // constructor(private http: HttpClient) {
  //   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //   this.currentUser = this.currentUserSubject.asObservable();
  // }
  //
  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;


  // login(email: string, password: string): Observable<LoginInterface> {
  //   return this.http.post<LoginInterface>('http://localhost:8080/api/login',
  //     {email, password})
  //     .pipe(map((user: LoginInterface) => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next({
  //           id: user.userId,
  //           role: user.role as Role,
  //           token: user.token,
  //           // email: email,
  //           // password: password
  //         });
  //       }
  //       return user;
  //     }));
  // }

  // logout() {
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }


