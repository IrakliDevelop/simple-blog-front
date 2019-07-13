import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error$: Observable<string | null>;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  onLogin() {
    const username: string = this.loginForm.value.username;
    const password: string = this.loginForm.value.password;
    if (this.loginForm.valid) {
      // TODO: add pipe and subscribe
      this.authService.login(username, password);
    }
  }

}
