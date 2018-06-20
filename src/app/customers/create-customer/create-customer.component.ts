import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.create(this.customer).then(data => console.log(data),
    error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
