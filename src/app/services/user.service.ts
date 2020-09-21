import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoggedUser} from '../models/loggedUser';
import {CustomerInterface} from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<string>;

  // private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {
  }

  // public get currentUserValue(): string {
  //   return this.currentUserSubject.value;
  // }
  //
  // getUser(id_Patient: number): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //   console.log("token" + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': "Bearer:" + userToken
  //     })
  //   };
  //
  //   console.log("id:" + userId);
  //   return this.http.get(`${this.baseUrl}` + "/" + userId, httpOptions);
  // }
  //
  //
  // updateUser(patient: Object, id_Patient: number): Observable<Object> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //
  //   console.log("token" + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': "Bearer:" + userToken
  //     })
  //   };
  //   return this.http.put(`${this.baseUrl}` + "/" + +userId, patient, httpOptions);
  // }
  //
  // deleteUser(): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //   console.log("token" + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': "Bearer:" + userToken
  //     })
  //   };
  //
  //   return this.http.delete(`${this.baseUrl}` + "/" + +userId, httpOptions);
  // }
  //
  //
  // register(loggedUser: LoggedUser) {
  //   return this.http.post<string>(`${this.baseUrl}`, loggedUser, {
  //     responseType: 'text' as 'json'
  //   });
  // }

  register(customer: CustomerInterface) {
    return this.http.post(`http://localhost:8080/customers`, customer, {
          responseType: 'text' as 'json'
        });
  }


  //
  //
  //
  //
  //
  // getLogin(userId: number ) {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   console.log("token"+localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "Bearer:"+userToken
  //     })
  //   };
  //
  //   console.log("id:"+userId);
  //   return this.http.get('http://localhost:8080/calendar/login' + "?user=" + userId,httpOptions);
  // }
  //

}
