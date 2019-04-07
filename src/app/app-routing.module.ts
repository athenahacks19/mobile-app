import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patient', loadChildren: './patient-tabs/patient-tabs.module#PatientTabsPageModule' },
  { path: 'parent', loadChildren: './parent-tabs/parent-tabs.module#ParentTabsPageModule' }
  // { path: 'patient-tab1', loadChildren: './patient-tab1/patient-tab1.module#PatientTab1PageModule' },
  // { path: 'patient-tab2', loadChildren: './patient-tab2/patient-tab2.module#PatientTab2PageModule' },
  // { path: 'patient-tab3', loadChildren: './patient-tab3/patient-tab3.module#PatientTab3PageModule' },
  // { path: 'patient-tabs', loadChildren: './patient-tabs/patient-tabs.module#PatientTabsPageModule' },
  // { path: 'parent-tab1', loadChildren: './parent-tab1/parent-tab1.module#ParentTab1PageModule' },
  // { path: 'parent-tab2', loadChildren: './parent-tab2/parent-tab2.module#ParentTab2PageModule' },
  // { path: 'parent-tab3', loadChildren: './parent-tab3/parent-tab3.module#ParentTab3PageModule' },
  // { path: 'parent-tabs', loadChildren: './parent-tabs/parent-tabs.module#ParentTabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
