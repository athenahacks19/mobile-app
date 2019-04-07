import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTabsPage } from './patient-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTabsPage,
    children:
      [
        {
          path: 'patient-tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../patient-tab1/patient-tab1.module#PatientTab1PageModule'
              }
            ]
        },
        {
          path: 'patient-tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../patient-tab2/patient-tab2.module#PatientTab2PageModule'
              }
            ]
        },
        {
          path: 'patient-tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../patient-tab3/patient-tab3.module#PatientTab3PageModule'
              }
            ]
        },
        {
          path: 'patient-tab4',
          children:
            [
              {
                path: '',
                loadChildren: '../patient-tab4/patient-tab4.module#PatientTab4PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'patient-tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'patient-tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}