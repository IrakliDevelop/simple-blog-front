import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {ButtonsModule, CardsModule, InputsModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardsModule,
    ButtonsModule,
    InputsModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule { }
