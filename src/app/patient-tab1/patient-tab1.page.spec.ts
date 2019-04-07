import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTab1Page } from './patient-tab1.page';

describe('PatientTab1Page', () => {
  let component: PatientTab1Page;
  let fixture: ComponentFixture<PatientTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
