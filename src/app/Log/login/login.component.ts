import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // You can implement actual authentication logic here
  }
}
