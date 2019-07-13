import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonsModule, CardsModule, InputsModule, InputUtilitiesModule, WavesModule} from 'angular-bootstrap-md';
import { RegisterComponent } from './components/register/register.component';

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
    InputsModule
  ]
})
export class AuthModule { }
