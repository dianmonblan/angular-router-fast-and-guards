import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistinctiveComponent } from './distinctive.component';

const routes: Routes = [{ path: '', component: DistinctiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistinctiveRoutingModule { }
