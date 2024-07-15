import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private router: Router) {}

  sign() {
    // Trim input values to remove leading and trailing whitespaces
    const trimmedEmail = this.login.trim();
    const trimmedPassword = this.password.trim();

    // Check if the email is empty
    if (!trimmedEmail) {
      alert('Email not entered. Please enter your email.');
      return;
    }

    // Check if the password is empty
    if (!trimmedPassword) {
      alert('Password not entered. Please enter your password.');
      return;
    }

    // Check if the provided email and password are valid
    if (trimmedEmail === 'faculty@gmail.com' && trimmedPassword === '123') {
      // Navigate to the desired route or perform any action on successful login
      this.router.navigate(['faculty']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
