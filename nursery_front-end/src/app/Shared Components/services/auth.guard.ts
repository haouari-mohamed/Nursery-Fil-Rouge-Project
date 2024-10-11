import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserType } from '../models/global.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const expectedRoles: string[] = route.data['roles'] as string[];
    const userRoles = this.authService.getRoles();

    const hasRole = expectedRoles.some(role => userRoles.includes(role));

    if (!hasRole) {
      if (userRoles.includes(UserType.ADMINISTRATEUR)) {
        this.router.navigate(['/admin']);
      } else if (userRoles.includes(UserType.SUPERVISEUR)) {
        this.router.navigate(['/supervisor']);
      } else if(userRoles.includes(UserType.PARENT)) { 
        this.router.navigate(['/home']);
      }
    }

    return of(hasRole);
  }
}
