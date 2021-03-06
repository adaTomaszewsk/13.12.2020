import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoggedUser} from '../models/loggedUser';
import {CustomerInterface} from '../models/customer';
import {SessionStorageService} from './session-storage';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<string>;

  private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient, private sessionService: SessionStorageService) {
  }

  getCustomer(id: number): Observable<any> {
    const userToken = this.sessionService.get('currentUser').token;
    const userId = this.sessionService.get('currentUser').id;
    console.log('token' + this.sessionService.get('currentUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.get(`http://localhost:8080/customers` + '/' + userId, httpOptions);
  }
  // tslint:disable-next-line:ban-types
  updateCustomer(customer: Object): Observable<Object> {
    const userToken = this.sessionService.get('currentUser').token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.put(`${this.baseUrl}`, customer, httpOptions);
  }

  deleteCustomer(): Observable<any> {
    const userToken = this.sessionService.get('currentUser').token;
    const userId = this.sessionService.get('currentUser').id;
    console.log('token' + localStorage.getItem('currentUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };

    return this.http.delete(`${this.baseUrl}` + '/' + userId, httpOptions);
  }

  register(customer: CustomerInterface) {
    return this.http.post(`http://localhost:8080/customers`, customer, {
          responseType: 'text' as 'json'
        });
  }

  getSupplier(id: number): Observable<any> {
    const userToken = this.sessionService.get('currentUser').token;
    const userId = this.sessionService.get('currentUser').id;
    console.log('token' + this.sessionService.get('currentUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.get(`http://localhost:8080/suppliers` + '/' + userId, httpOptions);
  }

  // tslint:disable-next-line:ban-types
  updateSupplier(supplier: Object): Observable<Object> {
    const userToken = this.sessionService.get('currentUser').token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.put(`http://localhost:8080/suppliers`, supplier, httpOptions);
  }

}
