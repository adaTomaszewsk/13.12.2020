import { Component, OnInit } from '@angular/core';
import {Dish, Order} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderService} from '../services';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  dishes: Observable<Dish[]>;
  order: Order = new Order();
  submitted = false;
  loading = false;
  dishStorage: string;

  constructor(private orderService: OrderService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.reloadData();
    // sessionStorage.getItem('id');
  }

  reloadData() {
    this.dishStorage = sessionStorage.getItem('id');
  }

  save() {
    this.loading = true;

    this.orderService.addOrder(this.order)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/klient']);
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.loading = false;
        });
    this.order = new Order();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/klient']);
  }

}
