import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule, CoreModule, CommentsRoutingModule, ReactiveFormsModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
