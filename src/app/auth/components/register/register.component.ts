import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // TODO: implement this
  error$: Observable<string | null>;

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
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

  onRegister() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const firstname = this.registerForm.value.firstname;
    const lastname = this.registerForm.value.lastname;
    // TODO: pipe and subscribe
    this.authService.register(username, password, firstname, lastname);
  }

}
