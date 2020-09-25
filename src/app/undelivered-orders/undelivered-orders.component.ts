import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../models';
import {OrderService} from '../services';
import {Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage';

@Component({
  selector: 'app-undelivered-orders',
  templateUrl: './undelivered-orders.component.html',
  styleUrls: ['./undelivered-orders.component.css']
})
export class UndeliveredOrdersComponent implements OnInit {

  orders: Observable<Order[]>;
  id_order: number;

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getUnassignedOrders();
  }

  changeStatus(id_order: number){
    this.orderService.changeStatus(this.id_order)
      .subscribe(data => {
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.changeStatus(this.id_order);
  }

  gotoList() {
    this.router.navigate(['/dostawca/realizowane_zamowienia']);
  }
}
