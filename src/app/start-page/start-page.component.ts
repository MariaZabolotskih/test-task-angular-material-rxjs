import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { OverlayService } from './../service/overlay.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements AfterViewInit {

  private _portal: TemplatePortal;

  @ViewChild('templatePortalContent') portalContent: TemplateRef<unknown>;

  constructor(
    private overlay: OverlayService,
    private _viewContainerRef: ViewContainerRef,
    ) { }

  ngAfterViewInit() {
    this._portal = new TemplatePortal(this.portalContent, this._viewContainerRef);
  }

  public open() {
    this.overlay.open(this._portal);
  }

  public close() {
    this.overlay.close();
  }

}
