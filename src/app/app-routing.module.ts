import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersComponent } from './customers/customer-component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'findByNome', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
