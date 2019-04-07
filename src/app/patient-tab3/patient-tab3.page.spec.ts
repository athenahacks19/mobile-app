import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTab3Page } from './patient-tab3.page';

describe('PatientTab3Page', () => {
  let component: PatientTab3Page;
  let fixture: ComponentFixture<PatientTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
