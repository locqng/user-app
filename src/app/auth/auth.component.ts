import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { clearLogin, login } from './store/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class LoginComponent {
  store = inject(Store);
  router = inject(Router);
  service = inject(AuthService);

  responseMessage = '';
  onSubmit(form: NgForm) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;
      this.store.dispatch(login({ username: username, password: password }));
      this.store.subscribe((state: any) => {
        if (state.auth.isLoggedIn) {
          //To be replaced with logout. Add this to treat Back button as logout
          this.store.dispatch(clearLogin());
          this.router.navigate((['/customer']));
          this.responseMessage = 'Login Successful!';
        }
        else {
          this.responseMessage = 'Login Failed!';
        }
      });
    }
  }

  onRegister(form: NgForm) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;
      this.service.register(username, password).subscribe({
        next: (response) => {
          this.responseMessage = 'Customer created successfully';
          console.log('Customer created successfully:', response);
        },
        error: (error) => {
          this.responseMessage = 'Error creating customer';
          console.error('Error creating customer:', error);
        },
      });
    }
  }
}