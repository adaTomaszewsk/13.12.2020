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

  constructor(private dishService: DishService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
    // this.id_Patient= JSON.parse(localStorage.getItem('currentUser')).userId;
  }

  // reloadData() {
  //   this.forms = this.formService.getFormList();
  // }

  reloadData() {
    this.dishes = this.dishService.getDishes();
  }

}
