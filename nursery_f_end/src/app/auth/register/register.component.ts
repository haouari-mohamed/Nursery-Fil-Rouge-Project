import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Shared Components/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  createAccount()  {
    if (this.registerForm.valid) {
      const { name, prenom, username, password } = this.registerForm.value;
      this.authService.register(name, prenom, username, password).subscribe(
        response => {
          console.log('Registration successful', response);
          // Redirect or handle post-registration logic
          this.router.navigate(['/login']); // Assuming you have a login route
        },
        error => {
          console.error('Registration error:', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);

}

}