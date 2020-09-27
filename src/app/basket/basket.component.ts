import { Component, OnInit } from '@angular/core';
import {Dish, Order} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderService} from '../services';
import {BasketService} from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  dish: Observable<Dish[]>;
  order: Order = new Order();
  submitted = false;
  loading = false;
  // dish: Dish;
  basket: any[];

  constructor(private orderService: OrderService,
              private router: Router,
              private basketService: BasketService) {
  }
  ngOnInit(): void {
    this.reloadData();
    // sessionStorage.getItem('id');
  }
  //
  reloadData() {
    this.basket = this.basketService.getItems();
    // this.get(this.dish.id, this.dish.price, this.dish.name);
  }
  //

  // get(id: number, priceD: string, name: string){
  //   sessionStorage.getItem(String(id));
  //   sessionStorage.getItem( priceD);
  //   sessionStorage.getItem(name);
  //   console.log(id, priceD, name);
  // }
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

  delete(dish: Dish) {
    console.log('deleting', dish);
  }

}
