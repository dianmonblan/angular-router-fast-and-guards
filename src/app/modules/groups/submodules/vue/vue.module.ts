import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueRoutingModule } from './vue-routing.module';
import { VueComponent } from './vue.component';


@NgModule({
  declarations: [VueComponent],
  imports: [
    CommonModule,
    VueRoutingModule
  ]
})
export class VueModule { }
