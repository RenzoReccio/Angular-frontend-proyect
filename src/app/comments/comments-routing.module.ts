import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsModule } from './comments.module';

const routes: Routes = [
    { path: 'comments/:id', component: CommentsModule, outlet:'commentsPi' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})

export class CommentsRoutingModule {

}