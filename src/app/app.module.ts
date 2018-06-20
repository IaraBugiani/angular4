import { HttpModule } from '@angular/http';
import { CustomerService } from './customers/customer.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersComponent } from './customers/customer-component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    CreateCustomerComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  exports: [
    CustomersDetailsComponent
  ],
  providers: [CustomerService,
    CustomersListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
