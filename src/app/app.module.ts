import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { UndeliveredOrdersComponent } from './undelivered-orders/undelivered-orders.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AlertsComponent} from './alerts/alerts.component';
import { ErrorInterceptor } from './auth/error.interceptor';
import {HttpXsrfInterceptor} from './auth/HttpXsrfInterceptor';
import {JwtInterceptor} from './auth';
import {DataCutomerComponent} from './data/customer/data-cutomer/data-cutomer.component';
import {DataSupplierComponent} from './data/supplier/data-supplier/data-supplier.component';
import {EditDataCutomerComponent} from './data/customer/edit-data-cutomer/edit-data-cutomer.component';
import {EditDataSupplierComponent} from './data/supplier/edit-data-supplier/edit-data-supplier.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        SupplierComponent,
        MenuComponent,
        SupplierOrdersComponent,
        CustomerOrdersComponent,
        UndeliveredOrdersComponent,
        BasketComponent,
        LoginComponent,
        RegisterComponent,
        DataCutomerComponent,
        DataSupplierComponent,
        EditDataCutomerComponent,
        EditDataSupplierComponent,
        AlertsComponent,
    ],
  imports: [
    BrowserModule,
    // NgModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpXsrfInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
