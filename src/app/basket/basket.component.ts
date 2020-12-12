import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Dish, Order} from '../models';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderService} from '../services';
import {BasketService} from '../services/basket.service';
import {SessionStorageService} from '../services/session-storage';
import * as moment from 'moment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  statusShow = {
    DELIVERED: 'Dostarczone',
    ORDER: 'Zamówione',
    PREPARED: 'Przygotowane'
  };
  id: number;
  orders: Observable<Order[]>;

  constructor(private orderService: OrderService,
              private router: Router,
              private sessionService: SessionStorageService) { }

  ngOnInit() {
    this.reloadData();
    const currentUser = this.sessionService.get('currentUser');
    this.id = currentUser.id;
  }

  reloadData() {
    this.orders = this.orderService.getCustomerOrders(this.id);
  }


}
