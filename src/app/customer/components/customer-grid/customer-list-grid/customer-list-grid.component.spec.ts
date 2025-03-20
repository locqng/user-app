import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListGridComponent } from './customer-list-grid.component';

describe('CustomerListGridComponent', () => {
  let component: CustomerListGridComponent;
  let fixture: ComponentFixture<CustomerListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
