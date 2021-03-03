import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ResolveResolver } from './guards/resolve.resolver';

const routes: Routes = [{
  path: 'user-profile',
  loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule),
  canActivate: [CanActivateGuard]
}, {
  path: 'distinctive',
  loadChildren: () => import('./modules/distinctive/distinctive.module').then(m => m.DistinctiveModule),
  canDeactivate: [CanDeactivateGuard]
}, {
  path: 'groups',
  loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule),
  canActivateChild: [CanActivateChildGuard]
}, {
  path: 'events',
  loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule),
  resolve: [ResolveResolver]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
