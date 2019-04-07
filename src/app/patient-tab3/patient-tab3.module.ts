import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientTab3Page } from './patient-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTab3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientTab3Page]
})
export class PatientTab3PageModule {}
