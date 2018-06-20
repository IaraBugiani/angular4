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
  nome: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.nome = '';
  }

  private customersListComponent() {
    this.customerService.getCustomersByNome(this.nome).then(nome => this.customers = nome);
  }

  onSubmit() {
    this.customersListComponent();
  }
}
