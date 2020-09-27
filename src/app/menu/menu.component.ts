import { Component, OnInit } from '@angular/core';
import {Dish} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DishService} from '../services';
import {BasketService} from '../services/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Observable<Dish[]>;
  orders = [];
  dish: Dish;

  constructor(private dishService: DishService,
              private router: Router,
              private basketService: BasketService) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.dishes = this.dishService.getDishes();
  }

  add(id: number, price: number, name: string){
    this.basketService.addItem(id, price, name);
  //
  // add(id: number, price: string, name: string){
  //   this.dish = this.sessionServise.addItem(this.dish.id, this.dish.price, this.dish.name);

    // sessionStorage.setItem('id', String(id));
    // sessionStorage.setItem('priceD', priceD);
    // sessionStorage.setItem('name', name);
    // console.log(id, priceD, name);
  }
}
// this.sessionServise.addItem(this.dish.id, this.dish.price, this.dish.name);
