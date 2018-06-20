import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit, Input } from '@angular/core';
import { CustomersListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService, private listComponent: CustomersListComponent) { }

  ngOnInit() {
  }

  getDelete(): void {
    this.customerService.getDelete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}
