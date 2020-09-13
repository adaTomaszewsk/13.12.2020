import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public isLoggedIn = false;
  public loggedUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: LoginService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.loggedUser = this.getLoggedUser();
  }

  getLoggedUser(): User {
    return this.authenticationService.getLoggedUser();
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
