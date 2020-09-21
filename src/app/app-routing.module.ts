import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth';
import {SupplierComponent} from './supplier/supplier.component';
import {Role} from './models/role';
import {MenuComponent} from './menu/menu.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {BasketComponent} from './basket/basket.component';
import {UndeliveredOrdersComponent} from './undelivered-orders/undelivered-orders.component';
import {SupplierOrdersComponent} from './supplier-orders/supplier-orders.component';
import {DataCutomerComponent} from './data/customer/data-cutomer/data-cutomer.component';
import {EditDataCutomerComponent} from './data/customer/edit-data-cutomer/edit-data-cutomer.component';
import {DataSupplierComponent} from './data/supplier/data-supplier/data-supplier.component';
import {EditDataSupplierComponent} from './data/supplier/edit-data-supplier/edit-data-supplier.component';

const appRoutes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'logowamie'},

  {
    path: 'klient', component: CustomerComponent, canActivate: [AuthGuard], data: {roles: [Role.CUSTOMER]},
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
      {path: 'historia', component: CustomerOrdersComponent, canActivate: [AuthGuard]},
      {path: 'koszyk', component: BasketComponent, canActivate: [AuthGuard]},
      // {path: 'podglad/:id_Form', component: FormDetailComponent, canActivate: [AuthGuard]},
      {path: 'dane_osobowe_klienta', component: DataCutomerComponent, canActivate: [AuthGuard]},
      {path: 'edycja_danych_klienta', component: EditDataCutomerComponent, canActivate: [AuthGuard]},
    ]
  },



  {
    path: 'dostawca', component: SupplierComponent, canActivate: [AuthGuard], data: {roles: [Role.SUPPLIER]},
    children: [
      {path: '', redirectTo: 'zamowienia', pathMatch: 'full'},
      {path: 'zamowienia', component: UndeliveredOrdersComponent, canActivate: [AuthGuard]},
      {path: 'realizowane_zamowienia', component: SupplierOrdersComponent, canActivate: [AuthGuard]},
      // {path: 'komentarz/:id_Form', component: FormsDoctorEditComponent, canActivate: [AuthGuard]},
      {path: 'dane_osobowe_dostawcy', component: DataSupplierComponent, canActivate: [AuthGuard]},
      {path: 'edycja_danych_dostawcy', component: EditDataSupplierComponent, canActivate: [AuthGuard]}
    ]
  },

  // { path: 'kalendarz/:id_Doctor', component: CalendarDoctorComponent },

  {path: 'logowanie', component: LoginComponent},
  {path: 'rejestracja', component: RegisterComponent},
  {path: '**', redirectTo: 'logowanie'},




  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
