import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { authReducer } from './app/auth/store/auth.reducer';
import { AuthEffects } from './app/auth/store/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/auth/auth.component';
import { CustomerMainPageComponent } from './app/customer/pages/customer-main-page/customer-main-page.component';
import { customerReducer } from './app/customer/store/customer.reducer';
import { CustomerEffects } from './app/customer/store/customer.effects';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerMainPageComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ auth: authReducer, customer: customerReducer }),
    provideEffects([AuthEffects, CustomerEffects]),
    provideHttpClient(),
    provideRouter(routes)
  ],
});