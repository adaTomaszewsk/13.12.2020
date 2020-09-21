import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {AlertService} from '../services/alert.service';
import {LoginInterface} from './login.interface';
import {Role} from '../models/role';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([`/klient`]);
        },
        error => {
          this.error = error;
          this.submitted = false;
          // this.loading = false;
        });
  //       (user: LoginInterface) => {
  //         this.submitted = false;
  //         this.loading = false;
  //         if (user.userRoles === Role.SUPPLIER) {
  //           this.router.navigate(['dostawca']);
  //         } else if (user.userRoles === Role.CUSTOMER) {
  //           this.router.navigate(['klient']);
  //         } else {
  //           this.router.navigate(['']);
  //         }
  //       },
  //       error => {
  //         this.error = error;
  //         this.submitted = false;
  //         this.loading = false;
  //       });
  }
}


