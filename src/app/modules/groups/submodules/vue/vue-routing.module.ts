import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VueComponent } from './vue.component';

const routes: Routes = [{ path: '', component: VueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueRoutingModule { }
