import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../side-menu-navigation/side-menu-navigation.component';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input()
  public readonly navItem: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

}
