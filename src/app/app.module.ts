import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanLoadGuard } from './guards/can-load.guard';

import { ResolveResolver } from './guards/resolve.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CanActivateGuard,
    CanActivateChildGuard,
    CanDeactivateGuard,
    ResolveResolver,
    CanLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
