import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared Components/services/auth.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  constructor(private src: AuthService , private router : Router){}
  
  cartVisible: boolean = false;
  userMenuVisible = false;

  toggleUserMenu(): void {
    this.userMenuVisible = !this.userMenuVisible;
  }



  logout(){
    this.src.logout();
    this.router.navigate(['/login']);
  }

  toggleCart(event: Event): void {
    event.preventDefault(); 
    this.cartVisible = !this.cartVisible;
  }
}
