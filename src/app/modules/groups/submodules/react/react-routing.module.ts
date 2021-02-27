import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactComponent } from './react.component';

const routes: Routes = [{ path: '', component: ReactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule { }
