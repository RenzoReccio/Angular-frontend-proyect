import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { CommentsModule } from './comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { ReactiveFormsModule}  from '@angular/forms'

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
    ShareModule,
    HttpClientModule,
    FooterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
