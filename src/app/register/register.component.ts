import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
// import {Patient} from '../models';
// import {PatientService} from '../services';
// import {LoginService} from '../services/login.service';
// import {Router} from '@angular/router';
// import {first} from 'rxjs/operators';
// import {HttpErrorResponse} from '@angular/common/http';
// import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  ngOnInit() {
  }


  // good
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

//   patient: Patient = new Patient();
//   submitted = false;
//   loading = false;
//
//
//   constructor(private patientService: PatientService,
//               private authenticationService: LoginService,
//               private router: Router,
//               private alertService: AlertService) {
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }
//
//   onSubmit(patient: NgForm) {
//     console.log(patient.value);
//     this.submitted = true;
//     this.alertService.clear();
//     this.save();
//   }
//
//   ngOnInit(): void {
//   }
//
//   newPatient(): void {
//     this.submitted = false;
//     this.patient = new Patient();
//   }
//
//   save() {
//     this.loading = true;
//
//     this.patientService.register(this.patient)
//       .pipe(first())
//       .subscribe(
//         data => {
//           console.log(data);
//           this.alertService.success(data, true);
//           this.router.navigate(['/logowanie']);
//         },
//         (httpErrorResponse: HttpErrorResponse) => {
//           this.alertService.error(httpErrorResponse.error);
//           this.loading = false;
//         });
//     this.patient = new Patient();
//     this.gotoList();
//   }
//
//
//   gotoList() {
//     this.router.navigate(['/logowanie']);
//   }
// }











// public patient: any = {};
//
// constructor(private http: HttpClient) {
//   this.http = http;
// }
//
// ngOnInit(): void {
// }
//
// save(patient:any): Observable<any>{
//   const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
//   return this.http.post("http://localhost:8080/api/v2/patients", patient, {headers: headers});
// }
// }
// registerForm: FormGroup;
// loading = false;
// submitted = false;
// returnUrl: string;
//
// constructor(
//   private formBuilder: FormBuilder,
//   private route: ActivatedRoute,
//   private router: Router,
//   private authenticationService: PatientService
// ) {
//   if (this.authenticationService.currentUserValue) {
//     this.router.navigate(['/']);
//   }
// }
//
// ngOnInit() {
//   this.registerForm = this.formBuilder.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', Validators.required],
//     pesel: ['', Validators.required],
//     name: ['', Validators.required],
//     surname: ['', Validators.required],
//     phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}')]],
//     sex: ['', Validators.required]
//   });
//
//   this.returnUrl = '/';
//   this.route.queryParamMap.subscribe(param => {
//     const token = param.get('token');
//     if (token) {
//       this.router.navigate(['/logowanie']);
//     }
//   });
// }
//
// get f() {
//   return this.registerForm.controls;
// }
//
// onSubmit() {
//   this.submitted = true;
//
//   // stop here if form is invalid
//   if (this.registerForm.invalid) {
//     return;
//   }
//
//   this.loading = true;
//   this.authenticationService.register(this.patient)
//     .pipe(first())
//     .subscribe(
//       data => {
//         console.log(data);
//         this.router.navigate(['/logowanie']);
//       },
//       error => {
//         this.error = error;
//         this.loading = false;
//       });
// }

//   registerForm: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl: string;
//   error = '';
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private authenticationService: LoginService
//   ) {
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }
//
//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       surname: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//           password: ['', Validators.required],
//           pesel: ['', Validators.required],
//           phoneNumber: ['', Validators.pattern('^[0-9]{9}')],
//           sex: ['', Validators.required]
//     });
//
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }
//
//   get f() {
//     return this.registerForm.controls;
//   }
//
//   onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//       return;
//     }
//
//     this.loading = true;
//     const patient = new RegisterForm(this.f.name.value, this.f.surname.value,this.f.email.value, this.f.password.value,
//       this.f.pesel.value, this.f.phoneNumber.value, this.f.sex.value);
//     console.log(patient);
//     this.authenticationService.register(patient)
//       .pipe()
//       .subscribe(
//         data => {
//           console.log(data);
//           this.router.navigate(['/login']);
//         },
//         error => {
//           this.error = error;
//           this.loading = false;
//         });
//   }
// }

//   patient: Patient= new Patient();
//   submitted = false;
//
//   constructor(private patientService: PatientService,
//               private router: Router) {
//   }
//
//   onSubmit(patient: NgForm) {
//     console.log(patient.value);
//     this.submitted = true;
//     this.save();
//     patient.reset();
//   }
//
//   ngOnInit(): void {
//   }
//
//   newPatient(): void {
//     this.submitted = false;
//     this.patient = new Patient();
//   }
//
//   save() {
//     this.patientService.register(this.patient)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.patient = new Patient();
//     this.gotoList();
//   }
//
//
//   gotoList() {
//     this.router.navigate(['/logowanie']);
//   }
// }
}
