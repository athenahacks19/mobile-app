import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTabsPage } from './patient-tabs.page';

describe('PatientTabsPage', () => {
  let component: PatientTabsPage;
  let fixture: ComponentFixture<PatientTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
