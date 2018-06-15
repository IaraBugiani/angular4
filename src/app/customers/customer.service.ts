import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Customer } from './customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Object> {
    return this.http.get('findAll');
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post('created', customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put('updateFindById', value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete('deleteFindById/${id}', { responseType: 'text' });
  }

  deleteAll(): Observable<any> {
    return this.http.delete('deleteAll', { responseType: 'text' });
  }

}
