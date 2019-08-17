import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router
  ) { }

  logOut(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  decodeToken(): any {
    const token = localStorage.getItem('access_token');
    return helper.decodeToken(token);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !helper.isTokenExpired(token);
  }
}
