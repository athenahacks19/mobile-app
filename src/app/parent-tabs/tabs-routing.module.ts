import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentTabsPage } from './parent-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ParentTabsPage,
    children:
      [
        {
          path: 'parent-tab1',
          children:
            [
              {
                path: '',
                loadChildren: '../parent-tab1/parent-tab1.module#ParentTab1PageModule'
              }
            ]
        },
        {
          path: 'parent-tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../parent-tab2/parent-tab2.module#ParentTab2PageModule'
              }
            ]
        },
        {
          path: 'parent-tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../parent-tab3/parent-tab3.module#ParentTab3PageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'parent-tab1',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'parent-tab1',
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