import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.ApiURL;

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/api/auth`, { username, password });
  }
  register(username, password, firstname, lastname): Observable<any> {
    return this.http.post(`${this.URL}/api/auth/register`, {username, password, firstname, lastname});
  }
  isAuthenticated(): boolean {
    return !this.isExpired(this.getToken());
  }
  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
  getToken(): string {
    return localStorage.getItem('access_token');
  }
  decodeToken(token: string): any {
    return helper.decodeToken(token);
  }
  getTokenExpirationDate(token: string): any {
    return helper.getTokenExpirationDate(token);
  }
  isExpired(token: string): boolean {
    return helper.isTokenExpired(token);
  }
}
