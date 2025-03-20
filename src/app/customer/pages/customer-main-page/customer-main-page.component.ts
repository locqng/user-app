import { Component, inject, OnInit } from '@angular/core';
import { CustomerCreateComponent } from '../../components/customer-form/customer-create-form/customer-create-form.component';
import { CustomerListGridComponent } from '../../components/customer-grid/customer-list-grid/customer-list-grid.component';
import { Store } from '@ngrx/store';
import { getCustomers } from '../../store/customer.actions';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../store/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-main-page',
  imports: [CustomerCreateComponent, CustomerListGridComponent, CommonModule],
  templateUrl: './customer-main-page.component.html',
  styleUrl: './customer-main-page.component.css'
})
export class CustomerMainPageComponent implements OnInit{
  
  private store = inject(Store);
  private customerService = inject(CustomerService);

  customers: any[] = [];
  token: string = '';
  role: string = '';
  responseMessage: string = '';

  customer: Customer = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
  };

  constructor()
  {
    this.store.select('auth').subscribe((authState: any) => {
      console.log(authState);
      this.token = authState.token;
      this.role = authState.role;
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
        this.customers = state.customers;
      }
    });
  } 

  onCustomerCreated(form: NgForm): void {
    if (form.valid){
      let customer: Customer = {
        firstName: form.value.firstName,
        middleName: form.value.middleName,
        lastName: form.value.lastName,
        email: form.value.email,
      };
      this.customerService.create(customer, this.token).subscribe({
        next: () => {
          this.store.dispatch(getCustomers({token: this.token}));
          this.responseMessage = 'Customer created successfully';
          form.resetForm();
        },
        error: () => this.responseMessage = 'Error creating customer',
      });
    }

    
  }
}
