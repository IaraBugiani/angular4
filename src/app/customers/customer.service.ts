import { CustomersListComponent } from './customers-list/customers-list.component';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  private customersUrl = 'customer';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    const url = `${this.customersUrl}/findAll`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomersByNome(nome: string): Promise<Customer[]> {
    return this.http.get(`${this.customersUrl}/findByNome/${nome}`)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post(`${this.customersUrl}/created`, JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  getDelete(id: number): Promise<void> {
    return this.http
      .get(`${this.customersUrl}/deleteFindById/${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteAll(): Promise<void> {
    return this.http.delete(`${this.customersUrl}/deleteAll`, { headers : this.headers })
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
