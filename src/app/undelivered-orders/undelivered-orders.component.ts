import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {Order} from '../models';
import {OrderService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage';
import { take } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-undelivered-orders',
  templateUrl: './undelivered-orders.component.html',
  styleUrls: ['./undelivered-orders.component.css']
})
export class UndeliveredOrdersComponent implements OnInit {
  statusShow = {
    DELIVERED: 'Dostarczone',
    ORDER: 'Zamówione',
    PREPARED: 'Przygotowane'
  };
  orders: Observable<Order[]>;
  private assignmentOrderSubscription: Subscription;

  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private sessionService: SessionStorageService ) { }

  ngOnInit() {
    this.reloadData();
    // this.order = new Order();
    //
    // this.id_order = this.route.snapshot.params['id_order'];
  }

  reloadData() {
    this.orders = this.orderService.getUnassignedOrders();
  }

  assignmentOrder(orderId: number){
      this.orderService.assignmentOrder(orderId)
      .pipe(take(1))
      .subscribe(() => {
        this.gotoList();
      }, error => console.log(error));
  }

  // assignmentOrder(order){
  //   debugger;
  // }

  onSubmit() {
  }

  gotoList() {
    this.router.navigate(['/dostawca/realizowane_zamowienia']);
  }

  onFormatDate(date: string) {
    return moment(date).format('DD.MM.YYYY, HH:mm:ss');
  }

}
