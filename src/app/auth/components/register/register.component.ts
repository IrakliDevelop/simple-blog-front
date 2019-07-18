import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  // TODO: implement this
  error$: BehaviorSubject<any | null>;
  unsubscribe$: Subject<void>;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();
    this.error$ = new BehaviorSubject<any|null>(null);
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    });
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }
  get password(): AbstractControl {
    return this.registerForm.get('password');
  }
  get firstname(): AbstractControl {
    return this.registerForm.get('firstname');
  }
  get lastname(): AbstractControl {
    return this.registerForm.get('lastname');
  }

  onRegister(): void {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const firstname = this.registerForm.value.firstname;
    const lastname = this.registerForm.value.lastname;
    // TODO: pipe and subscribe
    this.authService.register(username, password, firstname, lastname)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        console.log(data);
        this.error$.next(null);
        this.router.navigate(['/login']);
      }, err => {
        console.error(err);
        this.error$.next(err);
      });
  }
  errorHandler(error: any): string {
    let errorText = '';
    if (error.status === 406) {
      errorText = 'Username is already taken';
    } else {
      errorText = 'Something went wrong';
    }
    return errorText;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
