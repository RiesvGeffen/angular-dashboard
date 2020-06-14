import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PortalComponent } from './components/portal/portal.component';
import { SigninComponent } from './components/signin/signin.component';


const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        component: PageOneComponent
      },
      {
        path: 'page-two',
        component: PageTwoComponent
      },
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
