import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
}
