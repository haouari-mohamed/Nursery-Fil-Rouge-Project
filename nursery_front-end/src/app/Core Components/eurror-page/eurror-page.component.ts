import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eurror-page',
  templateUrl: './eurror-page.component.html',
  styleUrls: ['./eurror-page.component.css']
})
export class EurrorPageComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/home']); 
  }
}
