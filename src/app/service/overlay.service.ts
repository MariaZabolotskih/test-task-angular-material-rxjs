import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

interface DialogConfig {
  hasBackdrop?: boolean;
}

const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
}

@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay) { }
  
  private _overlayRef: OverlayRef;
  
  public open(portal: TemplatePortal) {
    const dialogConfig = DEFAULT_CONFIG;
    this._overlayRef = this.createOverlay(dialogConfig);
    const previewPortal = portal;
    this._overlayRef.attach(previewPortal);
  }

  public close() {
    this._overlayRef.dispose();

  }

  private createOverlay(config: DialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: DialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
