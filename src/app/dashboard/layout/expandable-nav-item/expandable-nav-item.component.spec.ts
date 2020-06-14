import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableNavItemComponent } from './expandable-nav-item.component';

describe('ExpandableNavItemComponent', () => {
  let component: ExpandableNavItemComponent;
  let fixture: ComponentFixture<ExpandableNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
