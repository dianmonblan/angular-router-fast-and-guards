import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvelteComponent } from './svelte.component';

const routes: Routes = [{ path: '', component: SvelteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvelteRoutingModule { }
