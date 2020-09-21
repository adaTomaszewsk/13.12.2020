import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-data-cutomer',
  templateUrl: './data-cutomer.component.html',
  styleUrls: ['./data-cutomer.component.css']
})
export class DataCutomerComponent implements OnInit {

  idCustomer: number;
  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: UserService,
              private loginService: LoginService) { }


  ngOnInit() {
    this.customer = new Customer();
    this.idCustomer = JSON.parse(localStorage.getItem('currentUser')).userId;
    this.customerService.getCustomer(this.idCustomer)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      }, error => console.log(error));
  }

  deleteCustomer(idCustomer: number) {
    this.customerService.deleteCustomer()
      .subscribe(
        data => {
          console.log(data);
          this.logout();
        },
        error => console.log(error));
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/logowanie']);
  }

}
