import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {DropdownModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    WavesModule,
    DropdownModule,
    NavbarModule,
    RouterModule,
    DropdownModule.forRoot(),
    SharedModule,
  ],
  exports: [HomeComponent, MainComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }
