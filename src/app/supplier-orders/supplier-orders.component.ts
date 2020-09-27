import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../models';
import {OrderService} from '../services';
import {Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.css']
})
export class SupplierOrdersComponent implements OnInit {

  orders: Observable<Order[]>;
  orderId: number;
  id: number;

  constructor(private orderService: OrderService,
              private router: Router,
              private sessionService: SessionStorageService) { }

  ngOnInit() {
    this.reloadData();
    const currentUser = this.sessionService.get('currentUser');
    this.id = currentUser.id;
  }

  reloadData() {
    this.orders = this.orderService.getSupplierOrders(this.id);
  }

  changeStatus(orderId: number){
    this.orderService.changeStatus(orderId)
      .pipe(take(1))
      .subscribe(() => {
        this.reloadData();
      }, error => console.log(error));
  }

  onSubmit() {
  }
}
