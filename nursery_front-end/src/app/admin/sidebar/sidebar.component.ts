import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared Components/services/auth.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private src: AuthService , private router : Router){}

  logout(){
    this.src.logout();
    this.router.navigate(['/login']);
  }

}
