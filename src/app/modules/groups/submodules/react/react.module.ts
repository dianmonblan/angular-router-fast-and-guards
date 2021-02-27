import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactRoutingModule } from './react-routing.module';
import { ReactComponent } from './react.component';


@NgModule({
  declarations: [ReactComponent],
  imports: [
    CommonModule,
    ReactRoutingModule
  ]
})
export class ReactModule { }
