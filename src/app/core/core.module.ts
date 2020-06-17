import { NgModule } from '@angular/core';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
