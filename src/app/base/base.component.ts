import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Overlay, OverlayRef, OverlayConfig, ConnectedPositionStrategy, OverlayContainer  } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { OverlayInnerComponent } from '../overlay-inner/overlay-inner.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild('targetElement') targetElement: ElementRef;
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  ngOnInit() {

  }

  open_overlay() {

    const positionStrategy: ConnectedPositionStrategy
     = this.overlay.position().connectedTo(this.targetElement,
        {originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom'});
    positionStrategy.withOffsetX(10);
    positionStrategy.withOffsetY(50);

    const config = new OverlayConfig({
      positionStrategy: positionStrategy,
      // panelClass: 'overlayPane'
    });

    this.overlayRef = this.overlay.create(config);
    const Portal = new ComponentPortal(OverlayInnerComponent);
    this.overlayRef.attach(Portal);

  }

  close_overlay() {
    this.overlayRef.detach();
  }

}
