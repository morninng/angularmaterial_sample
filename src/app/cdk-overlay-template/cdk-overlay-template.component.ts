import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Overlay, OverlayRef, OverlayConfig, ConnectedPositionStrategy, OverlayContainer  } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-cdk-overlay-template',
  templateUrl: './cdk-overlay-template.component.html',
  styleUrls: ['./cdk-overlay-template.component.scss']
})
export class CdkOverlayTemplateComponent implements OnInit {


  @ViewChild('targetElement') targetElement: ElementRef;
  overlayRef: OverlayRef;

  @ViewChild(CdkPortal) templatePortal: CdkPortal;

  constructor(private overlay: Overlay) { }

  ngOnInit() {}

  open_overlay() {

    const positionStrategy: ConnectedPositionStrategy
     = this.overlay.position().connectedTo(this.targetElement,
        {originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom'});
    positionStrategy.withOffsetX(10);
    positionStrategy.withOffsetY(0);

    const config = new OverlayConfig({
      positionStrategy: positionStrategy,
      // panelClass: 'overlayPane'
    });

    this.overlayRef = this.overlay.create(config);
    console.log('templatePortal', this.templatePortal);
    this.templatePortal.attach(this.overlayRef);
    console.log('aaa');

  }

  close_overlay() {
    this.overlayRef.detach();
  }

  }


