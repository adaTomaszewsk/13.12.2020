import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-supplier',
  templateUrl: './data-supplier.component.html',
  styleUrls: ['./data-supplier.component.css']
})
export class DataSupplierComponent implements OnInit {
  ngOnInit(): void {
  }
  //
  // id_Doctor: number;
  // doctor: Doctor;
  //
  // constructor(private route: ActivatedRoute,private router: Router,
  //             private doctorService: DoctorService,
  //             private loginService: LoginService) { }
  //
  // ngOnInit() {
  //   this.doctor = new Doctor();
  //   this.id_Doctor = JSON.parse(localStorage.getItem('currentUser')).userId;
  //   this.doctorService.getDoctor(this.id_Doctor)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.doctor = data;
  //     }, error => console.log(error));
  // }

}
