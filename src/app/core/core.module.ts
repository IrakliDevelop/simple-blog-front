import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, MainComponent]
})
export class CoreModule { }
