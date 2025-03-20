import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../../store/customer.model';
import { Store } from '@ngrx/store';
import { getCustomers } from '../../../store/customer.actions';

@Component({
  selector: 'app-customer-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.css'],
})
export class CustomerCreateComponent {
  private store = inject(Store);
  private customerService = inject(CustomerService);
  @Output() customerCreated = new EventEmitter<NgForm>();
  @Input() responseMessage = '';

  onSubmit(form: NgForm) {
    if (form.valid){
      this.customerCreated.emit(form);
    }
  }
}