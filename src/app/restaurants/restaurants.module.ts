import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { CoreModule } from '../core/core.module';
import { RestaurantsRoutingModule } from './restaurants-routing.module';



@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule, RestaurantsRoutingModule, CoreModule
  ],
  exports:[RestaurantsComponent]
})
export class RestaurantsModule { }
