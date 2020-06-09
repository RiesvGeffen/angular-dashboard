import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuBrandingComponent } from './side-menu-branding.component';

describe('SideMenuBrandingComponent', () => {
  let component: SideMenuBrandingComponent;
  let fixture: ComponentFixture<SideMenuBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
