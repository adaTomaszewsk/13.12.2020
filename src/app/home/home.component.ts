import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {Role, User} from '../models';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

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
  get isDoctor() {
    return this.currentUser && this.currentUser.role === Role.Doctor;
  }


}
