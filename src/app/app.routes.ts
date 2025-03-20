import { Routes } from '@angular/router';
import { LoginComponent } from './auth/auth.component';
import { CustomerCreateComponent } from './customer/components/customer-form/customer-create-form/customer-create-form.component';
import { CustomerMainPageComponent } from './customer/pages/customer-main-page/customer-main-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
    { path: 'login', component: LoginComponent },
      { path: 'customer', component: CustomerMainPageComponent },
];
