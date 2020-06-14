import { NgModule } from '@angular/core';
import { PageOneRoutingModule } from './page-one-routing.module';



@NgModule({
  declarations: [
    ...PageOneRoutingModule.components
  ],
  imports: [
    PageOneRoutingModule
  ]
})
export class PageOneModule { }
