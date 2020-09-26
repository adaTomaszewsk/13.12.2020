import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../models';
import {OrderService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage';

@Component({
  selector: 'app-undelivered-orders',
  templateUrl: './undelivered-orders.component.html',
  styleUrls: ['./undelivered-orders.component.css']
})
export class UndeliveredOrdersComponent implements OnInit {

  orders: Observable<Order[]>;
  id_order: number;
  id: number;


  constructor(private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private sessionService: SessionStorageService ) { }

  ngOnInit() {
    this.reloadData();
    const currentUser = this.sessionService.get('currentUser');
    this.id = currentUser.id;
    // this.order = new Order();
    //
    // this.id_order = this.route.snapshot.params['id_order'];
  }

  reloadData() {
    this.orders = this.orderService.getUnassignedOrders();
  }

  assignmentOrder(id_order: number){
    this.orderService.assignmentOrder(this.id_order, this.id)
      .subscribe(data => {
        this.gotoList();
      }, error => console.log(error));
  }

  // assignmentOrder(order){
  //   debugger;
  // }

  onSubmit() {
    this.assignmentOrder(this.id_order);
  }

  gotoList() {
    this.router.navigate(['/dostawca/realizowane_zamowienia']);
  }

}
