import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionStorageService} from '../../../services/session-storage';

@Component({
  selector: 'app-edit-data-cutomer',
  templateUrl: './edit-data-cutomer.component.html',
  styleUrls: ['./edit-data-cutomer.component.css']
})
export class EditDataCutomerComponent implements OnInit {

  customer: Customer;
  id: number;


  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: UserService,
              private sessionService: SessionStorageService) {
  }

  ngOnInit() {
    const currentUser = this.sessionService.get('currentUser');
    this.id = currentUser.id;

    this.customerService.getCustomer(this.id)
      .subscribe(data => {

        this.customer = data;
      }, error => console.log(error));

    // this.customer = new Customer();
    //
    // this.idCustomer = JSON.parse(localStorage.getItem('currentUser')).userId;
    //
    // this.customerService.getCustomer(this.idCustomer)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.customer = data;
    //   }, error => console.log(error));


  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer, this.id)
      .subscribe(data => {
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();
  }

  gotoList() {
    this.router.navigate(['/klient/dane_osobowe_klienta']);
  }
}
