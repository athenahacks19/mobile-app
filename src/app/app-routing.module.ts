import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patient', loadChildren: './patient-tabs/patient-tabs.module#PatientTabsPageModule' },
  { path: 'parent', loadChildren: './parent-tabs/parent-tabs.module#ParentTabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'patient-tab4', loadChildren: './patient-tab4/patient-tab4.module#PatientTab4PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
