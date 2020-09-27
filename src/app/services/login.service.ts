import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dish, User} from '../models';
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
          this.storageService.set('currentUser', userData);
          this.currentUserSubject.next(userData);
          return userData;
        })
      );
  }

  logout(): void {
    this.removeCurrentUserFromStorageAndRedirect();
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
}
