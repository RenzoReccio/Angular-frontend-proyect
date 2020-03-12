import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentsRoutingModule } from './comments/comments-routing.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path: '', component: CommentsComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommentsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
