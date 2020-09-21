// import {Injectable} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private currentUserSubject: BehaviorSubject<string>;

  //
  // constructor(private http: HttpClient) {
  // }
  //
  // public get currentUserValue(): string {
  //   return this.currentUserSubject.value;
  // }
  //
  // Supplier(id_supplier: number): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //   console.log('token' + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer:' + userToken
  //     })
  //   };
  //
  //   console.log('id:' + userId);
  //   return this.http.get(`${this.baseUrl}` + '/' + userId, httpOptions);
  // }
  //
  // updateSupplier(supplier: Object, id_supplier: number): Observable<Object> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   const userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  //
  //   console.log('token' + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer:' + userToken
  //     })
  //   };
  //   return this.http.put(`${this.baseUrl}` + '/' + +userId, supplier, httpOptions);
  // }
}
