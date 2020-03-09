import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CommentsComponent } from './comments.component';

const routes: Routes = [
    { path: 'comments', component: CommentsComponent, outlet:'commentsPi' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})

export class CommentsRoutingModule {

}