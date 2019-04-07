import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTab1Page } from './parent-tab1.page';

describe('ParentTab1Page', () => {
  let component: ParentTab1Page;
  let fixture: ComponentFixture<ParentTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
