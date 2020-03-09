import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsRoutingModule } from './restaurants/restaurants-routing.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants'},
  { path: '**', pathMatch: 'full', redirectTo: '/restaurants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
