import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { OverlayInnerComponent } from './overlay-inner/overlay-inner.component';

import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    OverlayInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  entryComponents: [
    OverlayInnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
