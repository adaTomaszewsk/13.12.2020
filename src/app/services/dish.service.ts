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

  getDishes(): Observable<DishInterface[]> {
    return this.http.get<DishInterface[]>(`http://localhost:8080/dishes`);
  }

}
