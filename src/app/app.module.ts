import { CustomerService } from './customers/customer.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    CreateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    CustomersDetailsComponent
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
