import { Component, inject, OnInit } from '@angular/core';
import { CustomerCreateComponent } from '../../components/customer-form/customer-create-form/customer-create-form.component';
import { CustomerListGridComponent } from '../../components/customer-grid/customer-list-grid/customer-list-grid.component';
import { Store } from '@ngrx/store';
import { getCustomers } from '../../store/customer.actions';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../store/customer.model';

@Component({
  selector: 'app-customer-main-page',
  imports: [CustomerCreateComponent, CustomerListGridComponent],
  templateUrl: './customer-main-page.component.html',
  styleUrl: './customer-main-page.component.css'
})
export class CustomerMainPageComponent implements OnInit{
  
  private store = inject(Store);
  private customerService = inject(CustomerService);

  customers: any[] = [];
  token: string = '';

  constructor()
  {
    this.store.select('auth').subscribe((authState: any) => {
      this.token = authState.token;
    });
  }

  ngOnInit(): void {
    this.store.select('auth').subscribe((authState: any) => {
      if(!!authState.token)
      {
        this.store.dispatch(getCustomers({token: authState.token}));
        this.getCustomers();
      }
    });
  }

  getCustomers() {
    this.store.select('customer').subscribe((state: any) => {
      if(!!state && !state.isLoading) {
        console.log(state);
        this.customers = state.customers;
      }
    });
  } 

  onCustomerCreated(newCustomer: Customer): void {
    this.customerService.create(newCustomer, this.token).subscribe({
      next: (response) => {
        this.store.dispatch(getCustomers({token: this.token}));
        console.log('Customer created successfully:', response);
      },
      error: (error) => console.error('Error creating customer:', error),
    });
  }
}
