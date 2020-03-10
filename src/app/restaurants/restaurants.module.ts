import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule, CoreModule, RouterModule
  ],
  exports:[RestaurantsComponent]
})
export class RestaurantsModule { }
