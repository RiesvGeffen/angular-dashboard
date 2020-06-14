import { Component, OnInit } from '@angular/core';

// PARENT URL ONLY WORKS IF CHILDREN IS EMPTY
export interface NavItem {
  title: string,
  icon: string,
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
      icon: 'fab fa-instagram',
      children: [
        {
          title: 'CRM',
          url: 'page-one'
        }
      ]
    },
    {
      title: 'Users',
      icon: 'fas fa-dice-d20',
      url: 'page-two'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
