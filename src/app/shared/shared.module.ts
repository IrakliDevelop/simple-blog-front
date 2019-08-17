import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostComponent } from './components/blogpost/blogpost.component';



@NgModule({
  declarations: [BlogpostComponent],
  exports: [
    BlogpostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
