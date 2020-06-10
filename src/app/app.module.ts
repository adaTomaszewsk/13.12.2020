import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { UndeliveredOrdersComponent } from './undelivered-orders/undelivered-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SupplierComponent,
    OrderComponent,
    MenuComponent,
    SupplierOrdersComponent,
    CustomerOrdersComponent,
    UndeliveredOrdersComponent,
  ],
  imports: [
    BrowserModule,
    // NgModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
