import { Component, OnInit } from '@angular/core';
import {User} from '../models';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  ngOnInit(): void {
  }
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//   user: User;
//   id_User: number;
//   //
//   //
//   // constructor(private route: ActivatedRoute,private router: Router,
//   //             private patientService: PatientService) { }
//   //
//   // ngOnInit() {
//   //   this.patient = new Patient();
//   //
//   //   this.id_Patient = JSON.parse(localStorage.getItem('currentUser')).userId;
//   //
//   //   this.patientService.getPatient(this.id_Patient)
//   //     .subscribe(data => {
//   //       console.log(data);
//   //       this.patient = data;
//   //     }, error => console.log(error));
//   //
//   //
//   // }
//   //
//   updatePatient() {
//     this.userService.updatePatient( this.loggedUser, this.id_User)
//       .subscribe(data => {
//         this.gotoList();
//       }, error => console.log(error));
//   }
//   //
//   onSubmit() {
//     this.updatePatient();
//   }
//   //
//   gotoList() {
//     this.router.navigate(['/pacjent/dane_osobowe_pacjenta']);
//   }
// }
}
