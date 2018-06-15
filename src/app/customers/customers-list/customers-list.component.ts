import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerService.deleteAll().subscribe( data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.customers = this.customerService.getCustomer();
  }

}
