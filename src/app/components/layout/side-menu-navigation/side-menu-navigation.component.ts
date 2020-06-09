import { Component, OnInit } from '@angular/core';

// PARENT URL ONLY WORKS IF CHILDREN IS EMPTY
export interface NavItem {
  title: string,
  url?: string,
  children?: {
    title: string,
    url: string
  }[]
}

@Component({
  selector: 'app-side-menu-navigation',
  templateUrl: './side-menu-navigation.component.html',
  styleUrls: ['./side-menu-navigation.component.css']
})
export class SideMenuNavigationComponent implements OnInit {

  public readonly navItems: NavItem[] = [
    {
      title: 'Dashboards',
      children: [
        {
          title: 'CRM',
          url: 'page-two'
        }
      ]
    },
    {
      title: 'Users',
      url: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
