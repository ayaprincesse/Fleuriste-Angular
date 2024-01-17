import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';
  phoneNumber: string = '';
  signupUsername: string = '';
  signupPassword: string = '';
  acceptTerms: boolean = false;

  signup() {}
}
