import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule, CoreModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
