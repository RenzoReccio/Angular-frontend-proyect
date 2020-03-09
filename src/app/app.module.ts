import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantsModule,
    CommentsModule,
    CoreModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
