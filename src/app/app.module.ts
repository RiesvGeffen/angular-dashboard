import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavbarComponent } from './components/layout/top-navbar/top-navbar.component';

import { SideMenuNavigationComponent } from './components/layout/side-menu-navigation/side-menu-navigation.component';
import { SideMenuBrandingComponent } from './components/layout/side-menu-branding/side-menu-branding.component';
import { ExpandableNavItemComponent } from './components/layout/expandable-nav-item/expandable-nav-item.component';
import { NavItemComponent } from './components/layout/nav-item/nav-item.component';
import { RootComponent } from './components/root/root.component';

import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TopNavbarComponent,
    PageOneComponent,
    PageTwoComponent,

    SideMenuNavigationComponent,
    SideMenuBrandingComponent,
    ExpandableNavItemComponent,
    NavItemComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
