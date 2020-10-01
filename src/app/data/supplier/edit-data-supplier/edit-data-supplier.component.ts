import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Supplier} from '../../../models/supplier';
import {SessionStorageService} from '../../../services/session-storage';

@Component({
  selector: 'app-edit-data-supplier',
  templateUrl: './edit-data-supplier.component.html',
  styleUrls: ['./edit-data-supplier.component.css']
})
export class EditDataSupplierComponent implements OnInit {
  supplier: Supplier;
  idSupplier: number;


  constructor(private route: ActivatedRoute, private router: Router,
              private supplierService: UserService) {
  }

  ngOnInit() {
    this.supplier = new Supplier();

    this.idSupplier = JSON.parse(localStorage.getItem('currentUser')).userId;

    this.supplierService.getSupplier(this.idSupplier)
      .subscribe(data => {
        console.log(data);
        this.supplier = data;
      }, error => console.log(error));


  }

  updateSupplier() {
    this.supplierService.updateSupplier(this.supplier)
      .subscribe(data => {
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSupplier();
  }
  gotoList() {
    this.router.navigate(['/dostawca/dane_osobowe_dostawcy']);
  }
}
