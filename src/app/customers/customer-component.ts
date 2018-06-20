import { AppComponent } from './../app.component';
import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-routing',
  templateUrl: './customer-component.html'
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) {}

  getCustomers() {
    this.customerService.getCustomers().then(customers => this.customers = customers);
 }

 deleteAll() {
     this.customerService.deleteAll();
 }

 ngOnInit(): void {
    this.getCustomers();
 }

 onSelect(cust: Customer): void {
   this.selectedCustomer = cust;
 }
}
