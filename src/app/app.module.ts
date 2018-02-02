import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { OverlayInnerComponent } from './overlay-inner/overlay-inner.component';

import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import { CdkOverlayTemplateComponent } from './cdk-overlay-template/cdk-overlay-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    OverlayInnerComponent,
    CdkOverlayTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule
  ],
  entryComponents: [
    OverlayInnerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
