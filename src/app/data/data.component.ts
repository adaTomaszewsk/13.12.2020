import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // id_Patient: number;
  // patient: Patient;
  //
  // constructor(private route: ActivatedRoute,private router: Router,
  //             private patientService: PatientService,
  //             private loginService: LoginService) { }
  //
  //
  // ngOnInit() {
  //   this.patient = new Patient();
  //   this.id_Patient= JSON.parse(localStorage.getItem('currentUser')).userId;
  //   this.patientService.getPatientList(this.id_Patient)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.patient = data;
  //     }, error => console.log(error));
  // }
  //
  // deletePatient(id_Patient: number) {
  //   this.patientService.deletePatient()
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.logout();
  //       },
  //       error => console.log(error));
  // }
  //
  // logout(){
  //   this.loginService.logout();
  //   this.router.navigate(['/logowanie']);
  // }

}
