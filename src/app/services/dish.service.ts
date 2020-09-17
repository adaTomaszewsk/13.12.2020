import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DishInterface} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) {
  }


  // getDishes(): Observable<any> {
  //   const userToken = JSON.parse(localStorage.getItem('currentUser')).token;
  //   console.log('token' + localStorage.getItem('currentUser'));
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer:' + userToken
  //     })
  //   };
  //   return this.http.get('http://localhost:8080/dishes', httpOptions);
  // }

  getDishes(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>(`http://localhost:8080/dishes`);
  }

}
