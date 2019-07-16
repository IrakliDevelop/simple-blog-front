import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, CardsModule, InputsModule, InputUtilitiesModule, WavesModule } from 'angular-bootstrap-md';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CardsModule,
    InputUtilitiesModule,
    ButtonsModule,
    WavesModule,
    InputsModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
