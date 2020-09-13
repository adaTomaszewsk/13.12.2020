import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private baseUrl = 'http://localhost:8080/api/v1/forms';

  constructor(private http: HttpClient) { }

  //
  //
  // getOrdersList(): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }
  //
  // getOrder(id_Form: number): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   console.log("token"+localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "Bearer:"+userToken
  //     })
  //   };
  //   return this.http.get(`${this.baseUrl}/${id_Form}`,httpOptions);
  // }
  //
  // addOrder(form: Object, userId: number ): Observable<Object> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   console.log("token"+localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "Bearer:"+userToken
  //     })
  //   };
  //   console.log("blad"+userId);
  //   console.log("form"+JSON.stringify(form));
  //   return this.http.post<Object>(`${this.baseUrl}`+"?patientId=" + userId, form, httpOptions);
  // }
  //
  // updateOrder(form: Object, id_Form: number, userId: number ): Observable<Object> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   console.log("token"+localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "Bearer:"+userToken
  //     })
  //   };
  //   return this.http.put(`${this.baseUrl}/${id_Form}`+"?doctorId=" + userId, form, httpOptions);
  // }
  //
  //
  // getOrdersCustomers(id_Patient: number): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
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
  //   return this.http.get(`${this.baseUrl}`+"/patient/" + userId,httpOptions);
  // }
  //
  //
  // getOrdersSuppliers(id_Doctor: number): Observable<any> {
  //   const {token: userToken, userId} = JSON.parse(localStorage.getItem('currentUser'));
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
  //   return this.http.get(`${this.baseUrl}`+"/doctor/" + userId,httpOptions);
  // }
  //
  //
  // getAvaibleOrdersSuppliers(): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //   console.log("token"+localStorage.getItem('currentUser'));
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "Bearer:"+userToken
  //
  //     })
  //   };
  //
  //   console.log("id:"+userId);
  //   return this.http.get('http://localhost:8080/api/v1/forms/doctorAll', httpOptions);
  // }
}
