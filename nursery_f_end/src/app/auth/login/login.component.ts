import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Shared Components/services/auth.service';
import { UserType } from '../../Shared Components/models/global.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    this.loading = true;
    this.error = '';
  
    const { username, password } = this.loginForm.value;
  
    this.authService.login(username, password).subscribe(
      response => {
        this.loading = false;
        console.log('Login successful', response); 
  
        const userType = response.roles[0] as UserType;
        switch(userType) {
          case UserType.PARENT:
            this.router.navigate(['/home']);
            break;
          case UserType.SUPERVISEUR:
            this.router.navigate(['/superviseur-dashboard']);
            break;
          case UserType.ADMINISTRATEUR:
            this.router.navigate(['/admin']);
            break;
          default:
            this.router.navigate(['/login']);
        }
      },
      error => {
        this.loading = false;
        console.error('Login failed', error); 
        this.error = 'Invalid username or password';
      }
    );
  }
  navigateToSignup(){
    this.router.navigate(['/register']); 
  }
}
