import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTab4Page } from './patient-tab4.page';

describe('PatientTab4Page', () => {
  let component: PatientTab4Page;
  let fixture: ComponentFixture<PatientTab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTab4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
