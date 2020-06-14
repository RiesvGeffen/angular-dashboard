import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpandableNavItemComponent } from './layout/expandable-nav-item/expandable-nav-item.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { SideMenuBrandingComponent } from './layout/side-menu-branding/side-menu-branding.component';
import { SideMenuNavigationComponent } from './layout/side-menu-navigation/side-menu-navigation.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page-one'
      },
      {
        path: 'page-one',
        loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule)
      },
      {
        path: 'page-two',
        loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  static components = [
    ExpandableNavItemComponent,
    NavItemComponent,
    SideMenuBrandingComponent,
    SideMenuNavigationComponent,
    TopNavbarComponent,

    DashboardComponent
  ];
}
