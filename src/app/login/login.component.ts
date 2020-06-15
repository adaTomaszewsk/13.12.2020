import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {LoginService} from '../services/login.service';
import {LoginInterface} from './login.interface';
import {Role} from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // isLoginMode = true;
  //
  // constructor(private router: Router) {
  // }
  // onLoadRegister() {
  //   this.router.navigate(['/rejestracja']);
  // }
  //
  // onSubmit(form: NgForm){
  //   console.log(form.value);
  //   form.reset();
  // }

  // select = [
  //   {
  //     id: 0,
  //     value: 'wartosc 0'
  //   },
  //   {
  //     id: 1,
  //     value: 'wartosc 1'
  //   },
  //   {
  //     id: 2,
  //     value: 'wartosc 2'
  //   }, {
  //     id: 3,
  //     value: 'wartosc 3'
  //   }
  // ]

  loginForm: FormGroup;
  testForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
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
        (user: LoginInterface) => {
          this.submitted = false;
          this.loading = false;
          if (user.role === Role.Doctor) {
            this.router.navigate(['lekarz']);
          } else if (user.role === Role.Patient) {
            this.router.navigate(['pacjent']);
          } else {
            this.router.navigate(['']);
          }
        },
        error => {
          this.error = error;
          this.submitted = false;
          this.loading = false;
        });
  }
}
