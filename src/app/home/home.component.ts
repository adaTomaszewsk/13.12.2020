import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {User} from '../models';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {Role} from '../models/role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: LoginService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isSupplier() {
    // @ts-ignore
    return this.currentUser && this.currentUser.userRoles === Role.Supplier;
  }


}
