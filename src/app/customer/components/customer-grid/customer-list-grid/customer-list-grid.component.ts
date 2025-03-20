import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Customer } from '../../../store/customer.model';

@Component({
  selector: 'app-customer-list-grid',
  imports: [CommonModule],
  templateUrl: './customer-list-grid.component.html',
  styleUrl: './customer-list-grid.component.css'
})
export class CustomerListGridComponent {
  @Input() customers: any[] = [];
}
