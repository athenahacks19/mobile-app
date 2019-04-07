import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTab2Page } from './parent-tab2.page';

describe('ParentTab2Page', () => {
  let component: ParentTab2Page;
  let fixture: ComponentFixture<ParentTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
