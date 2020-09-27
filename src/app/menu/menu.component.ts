import { Component, OnInit } from '@angular/core';
import {Dish} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DishService} from '../services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Observable<Dish[]>;
  orders = [];

  constructor(private dishService: DishService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.dishes = this.dishService.getDishes();
  }

  // add(dishId: number){
  //   sessionStorage.setItem('id', String(dishId));
  //   console.log(dishId);
  // }
  add(id: number, priceD: string, name: string){
    sessionStorage.setItem('id', String(id));
    sessionStorage.setItem('priceD', priceD);
    sessionStorage.setItem('name', name);
    console.log(id, priceD, name);
  }
}
