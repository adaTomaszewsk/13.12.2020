import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {AlertService} from '../services/alert.service';
import {first} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {Customer} from '../models/customer';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  loading = false;


  constructor(private customerService: UserService,
              private authenticationService: LoginService,
              private router: Router,
              private alertService: AlertService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(customer: NgForm) {
    console.log(customer.value);
    this.submitted = true;
    this.alertService.clear();
    this.save();
  }

  ngOnInit(): void {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.loading = true;

    this.customerService.register(this.customer)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success(typeof data === 'string' ? data : 'Rejestracja przebiegła pomyślnie' , true);
          this.router.navigate(['/logowanie']);
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.alertService.error(httpErrorResponse.error);
          this.loading = false;
        });
    this.customer = new Customer();
    this.gotoList();
  }


  gotoList() {
    this.router.navigate(['/logowanie']);
  }
}
