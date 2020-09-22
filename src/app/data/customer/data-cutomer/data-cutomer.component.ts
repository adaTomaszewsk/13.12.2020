import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import { LoginService } from 'src/app/services/login.service';
import {SessionStorageService} from '../../../services/session-storage';

@Component({
  selector: 'app-data-cutomer',
  templateUrl: './data-cutomer.component.html',
  styleUrls: ['./data-cutomer.component.css']
})
export class DataCutomerComponent implements OnInit {

  id: number;
  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: UserService,
              private loginService: LoginService,
              private sessionService: SessionStorageService) { }


  ngOnInit() {
    const currentUser = this.sessionService.get('currentUser');
    console.log(currentUser);
    this.id = currentUser.id;

    this.customerService.getCustomer(this.id)
      .subscribe(data => {

        this.customer = data;
      }, error => console.log(error));
  }

  deleteCustomer(id: number) {
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
