import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule, CoreModule, RouterModule, ReactiveFormsModule
  ],
  exports:[RestaurantsComponent]
})
export class RestaurantsModule { }
