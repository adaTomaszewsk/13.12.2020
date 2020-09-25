import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../models';
import {OrderService} from '../services';
import {Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.css']
})
export class SupplierOrdersComponent implements OnInit {

  id: number;
  orders: Observable<Order[]>;
  id_order: number;

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
