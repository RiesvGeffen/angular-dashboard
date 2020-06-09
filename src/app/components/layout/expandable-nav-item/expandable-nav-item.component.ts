import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../side-menu-navigation/side-menu-navigation.component';

@Component({
  selector: 'app-expandable-nav-item',
  templateUrl: './expandable-nav-item.component.html',
  styleUrls: ['./expandable-nav-item.component.css']
})
export class ExpandableNavItemComponent implements OnInit {

  @Input()
  public readonly navItem: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

}
