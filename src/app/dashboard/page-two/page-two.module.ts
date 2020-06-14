import { NgModule } from '@angular/core';
import { PageTwoRoutingModule } from './page-two-routing.module';



@NgModule({
  declarations: [
    ...PageTwoRoutingModule.components
  ],
  imports: [
    PageTwoRoutingModule
  ]
})
export class PageTwoModule { }
