import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateFormComponent } from './customer-create-form.component';

describe('CustomerCreateFormComponent', () => {
  let component: CustomerCreateFormComponent;
  let fixture: ComponentFixture<CustomerCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
