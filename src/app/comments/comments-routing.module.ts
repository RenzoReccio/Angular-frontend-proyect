import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CommentsComponent } from './comments.component';

const routes: Routes = [
    { path: 'comments/:id', component: CommentsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})

export class CommentsRoutingModule {

}