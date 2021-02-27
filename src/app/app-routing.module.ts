import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) }, { path: 'distinctive', loadChildren: () => import('./modules/distinctive/distinctive.module').then(m => m.DistinctiveModule) }, { path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule) }, { path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
