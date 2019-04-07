import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTabsPage } from './parent-tabs.page';

describe('ParentTabsPage', () => {
  let component: ParentTabsPage;
  let fixture: ComponentFixture<ParentTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
