import { Component, OnInit } from '@angular/core';
import {User} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

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
