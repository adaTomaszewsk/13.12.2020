import { Component } from '@angular/core';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';
import {User} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: LoginService) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }
}
