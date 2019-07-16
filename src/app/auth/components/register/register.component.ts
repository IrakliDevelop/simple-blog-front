import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  // TODO: implement this
  error$: Observable<string | null>;
  unsubscribe$: Subject<void>;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();
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
      .subscribe(data => console.log(data));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
