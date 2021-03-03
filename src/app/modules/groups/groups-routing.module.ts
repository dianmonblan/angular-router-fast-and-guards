import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from 'src/app/guards/can-load.guard';

import { GroupsComponent } from './groups.component';

const routes: Routes = [{
  path: '', component: GroupsComponent,
  canLoad: [CanLoadGuard],
  children: [{
    path: 'angular',
    loadChildren: () => import('./submodules/angular/angular.module').then(m => m.AngularModule)
  }, {
    path: 'react',
    loadChildren: () => import('./submodules/react/react.module').then(m => m.ReactModule)
  }, {
    path: 'vue',
    loadChildren: () => import('./submodules/vue/vue.module').then(m => m.VueModule)
  }, {
    path: 'svelte',
    loadChildren: () => import('./submodules/svelte/svelte.module').then(m => m.SvelteModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
