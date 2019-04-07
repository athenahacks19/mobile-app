import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientTabsPage } from './patient-tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';

const routes: Routes = [
  {
    path: '',
    component: PatientTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [PatientTabsPage]
})
export class PatientTabsPageModule {}
