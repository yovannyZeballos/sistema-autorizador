import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/firebase/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup | any;
  public errorMessage: any;
  accounts = [
    { name: 'Arizona', value: 'AZ', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Colorado', value: 'CO', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Idaho', value: 'ID', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Montana', value: 'MT', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Nebraska', value: 'NE', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'New Mexico', value: 'NM', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'North Dakota', value: 'AZ', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Utah', value: 'UT', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Wyoming', value: 'WY', country: 'Mountain Time Zone', child: { state: 'Active' } },
    { name: 'Alabama', value: 'AL', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Arkansas', value: 'AR', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Illinois', value: 'IL', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Iowa', value: 'IA', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Kansas', value: 'KS', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Kentucky', value: 'KY', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Louisiana', value: 'LA', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Minnesota', value: 'MN', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Mississippi', value: 'MS', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Missouri', value: 'MO', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Oklahoma', value: 'OK', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'South Dakota', value: 'SD', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Texas', value: 'TX', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Tennessee', value: 'TN', country: 'Central Time Zone', child: { state: 'Active' } },
    { name: 'Wisconsin', value: 'WI', country: 'Central Time Zone', child: { state: 'Active' } },
];
  constructor(public authService: AuthService, private fb: FormBuilder) {

    

    //firebase
      this.loginForm = this.fb.group({
        email: ['spruko@template.com', [Validators.required, Validators.email]],
        password: ['spruko', Validators.required]
      });
  }

  showPassword() {
    this.show = !this.show;
  }
  
  // Login With Google
  loginGoogle() {
    this.authService.GoogleAuth();
  }

  // Login With Twitter
  loginTwitter(): void {
    this.authService.signInTwitter();
  }

  // Login With Facebook
  loginFacebook() {
    this.authService.signInFacebok();
  }

  // Simple Login
  login() {
    this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
  }

  ngOnInit(): void {}

}
