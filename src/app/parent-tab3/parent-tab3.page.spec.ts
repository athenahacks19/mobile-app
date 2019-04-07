import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTab3Page } from './parent-tab3.page';

describe('ParentTab3Page', () => {
  let component: ParentTab3Page;
  let fixture: ComponentFixture<ParentTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
