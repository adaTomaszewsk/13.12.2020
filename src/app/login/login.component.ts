import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {LoginInterface} from './login.interface';
import {Role} from '../models/role';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  testForm: FormGroup;
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


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.testForm = new FormGroup({
      test: new FormControl(null)
    });

    this.testForm.get('test').valueChanges.subscribe(res => console.log(res));

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        next => {
          if (this.isUserInRole('SUPPLIER', next.userRoles)) {
            this.router.navigate([`/dostawca`]);
          }
          if (this.isUserInRole('CUSTOMER', next.userRoles)) {
            this.router.navigate([`/klient`]);
          }
        },
        error => {
          this.error = error;
          this.submitted = false;
          this.loading = false;
        });
  }
  isUserInRole(role: string, roles: Array<string>): boolean {
    console.log(roles);
    // @ts-ignore
    for (const userRole of roles) {
      console.log(userRole);
      if (role === userRole) {
        return true;
      }
    }
    return false;
  }

}


