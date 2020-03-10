import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path: '**', pathMatch: 'full', redirectTo: '/' }, 
  { path: '', component: CommentsComponent, outlet: "commentsPi"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
