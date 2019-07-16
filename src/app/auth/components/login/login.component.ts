import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import {finalize, pluck, takeUntil} from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  error: any;
  private loading: boolean;
  unsubscribe$: Subject<void>;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();
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

  onLogin(): void {
    const username: string = this.loginForm.value.username;
    const password: string = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(username, password)
        .pipe(
          takeUntil(this.unsubscribe$),
          pluck('token'),
          finalize(() => this.loading = false)
          )
        .subscribe(token => {
          this.authService.setToken(token);
        },
          err => {
            console.log(err);
            this.error = err;
          });
    }
  }

  errorHandler(error: any): string {
    let errorText: string;
    if (error.status === 404) {
      errorText = 'Invalid Username';
    } else if (error.status === 406) {
      errorText = 'Invalid Password';
    } else {
      errorText = 'Something went wrong';
    }
    return errorText;
  }

  get loading$() {
    return this.loading;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
