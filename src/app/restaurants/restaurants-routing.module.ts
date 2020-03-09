import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';

const routes: Routes = [
    { path: 'restaurants', component: RestaurantsComponent, outlet:'restaurantsSideBar' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})

export class RestaurantsRoutingModule {

}