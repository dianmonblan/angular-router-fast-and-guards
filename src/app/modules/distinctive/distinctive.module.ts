import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistinctiveRoutingModule } from './distinctive-routing.module';
import { DistinctiveComponent } from './distinctive.component';


@NgModule({
  declarations: [DistinctiveComponent],
  imports: [
    CommonModule,
    DistinctiveRoutingModule
  ]
})
export class DistinctiveModule { }
