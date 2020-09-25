import { Component, OnInit } from '@angular/core';
import {Supplier} from '../../../models/supplier';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {LoginService} from '../../../services/login.service';
import {SessionStorageService} from '../../../services/session-storage';

@Component({
  selector: 'app-data-supplier',
  templateUrl: './data-supplier.component.html',
  styleUrls: ['./data-supplier.component.css']
})
export class DataSupplierComponent implements OnInit {

  id: number;
  supplier: Supplier;

  constructor(private route: ActivatedRoute, private router: Router,
              private supplierService: UserService,
              private loginService: LoginService,
              private sessionService: SessionStorageService) { }


  ngOnInit() {
    const currentUser = this.sessionService.get('currentUser');
    this.id = currentUser.id;

    this.supplierService.getSupplier(this.id)
      .subscribe(data => {

        this.supplier = data;
      }, error => console.log(error));
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/logowanie']);
  }
}
