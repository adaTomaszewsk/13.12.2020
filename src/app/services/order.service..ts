import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionStorageService} from './session-storage';
import {CustomerInterface} from '../models/customer';
import {Order} from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private baseUrl = 'http://localhost:8080/api/v1/forms';

  constructor(private http: HttpClient, private sessionService: SessionStorageService) {
  }

  getCustomerOrders(id: number): Observable<any> {
    const userToken = this.sessionService.get('currentUser').token;
    const userId = this.sessionService.get('currentUser').id;
    // console.log('token' + this.sessionService.get('currentUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.get(`http://localhost:8080/orders/customer` + '/' + userId, httpOptions);
  }


  getSupplierOrders(id: number): Observable<any> {
    const user = this.sessionService.get('currentUser');
    // console.log('token' + this.sessionService.get('currentUser'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token
      })
    };
    return this.http.get(`http://localhost:8080/orders/supplier` + '/' + user.id, httpOptions);
  }

  getUnassignedOrders(): Observable<any> {
    const userToken = this.sessionService.get('currentUser').token;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken
      })
    };
    return this.http.get(`http://localhost:8080/orders/unassigned`, httpOptions);
  }

  changeStatus(id: number): Observable<any> {
    const user = this.sessionService.get('currentUser');
    // console.log('token' + user);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer:' + user.token
      })
    };
    return this.http.put(`http://localhost:8080/orders/status/` + id, httpOptions);
  }

  // tslint:disable-next-line:ban-types
  assignmentOrder(id: number): Observable<Object> {
    const user = this.sessionService.get('currentUser');
    // console.log('token' + user);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer:' + user.token
      })
    };
    return this.http.put(`http://localhost:8080/orders/` + id + '?idSupplier=' + user.id, httpOptions);
  }

  addOrder(order: Order) {
    const user = this.sessionService.get('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer:' + user.token
      })
    };
    return this.http.post(`http://localhost:8080/orders` + '?idCustomer=' + user.id, order, httpOptions);
  }
}
