import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-data-supplier',
  templateUrl: './edit-data-supplier.component.html',
  styleUrls: ['./edit-data-supplier.component.css']
})
export class EditDataSupplierComponent implements OnInit {
  ngOnInit(): void {
  }

  // doctor: Doctor;
  // id_Doctor: number;
  //
  //
  // constructor(private route: ActivatedRoute,private router: Router,
  //             private doctorService: DoctorService) { }
  //
  // ngOnInit() {
  //   this.doctor = new Doctor();
  //
  //   this.id_Doctor = JSON.parse(localStorage.getItem('currentUser')).userId;
  //
  //   this.doctorService.getDoctor(this.id_Doctor)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.doctor = data;
  //     }, error => console.log(error));
  //
  //
  // }
  // updateDoctor() {
  //   this.doctorService.updateDoctor( this.doctor, this.id_Doctor)
  //     .subscribe(data => {
  //       this.gotoList();
  //     }, error => console.log(error));
  //
  // }
  //
  // onSubmit() {
  //   this.updateDoctor();
  // }
  //
  // gotoList() {
  //   this.router.navigate(['/lekarz/dane_osobowe_lekarza']);
  // }
}
