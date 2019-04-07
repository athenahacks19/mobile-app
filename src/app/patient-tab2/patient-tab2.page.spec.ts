import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTab2Page } from './patient-tab2.page';

describe('PatientTab2Page', () => {
  let component: PatientTab2Page;
  let fixture: ComponentFixture<PatientTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
