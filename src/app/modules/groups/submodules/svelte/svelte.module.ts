import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvelteRoutingModule } from './svelte-routing.module';
import { SvelteComponent } from './svelte.component';


@NgModule({
  declarations: [SvelteComponent],
  imports: [
    CommonModule,
    SvelteRoutingModule
  ]
})
export class SvelteModule { }
