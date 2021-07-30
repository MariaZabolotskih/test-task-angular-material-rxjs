import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-overlay',
  templateUrl: './dialog-overlay.component.html',
  styleUrls: ['./dialog-overlay.component.scss']
})
export class DialogOverlayComponent {

  constructor() { }

  @Output() onClosed = new EventEmitter();
  @Input() header = 'Заголовок';

  public close() {
    this.onClosed.emit();
  }


}
