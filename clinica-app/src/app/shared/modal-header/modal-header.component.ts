import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements AfterViewInit {

  constructor(
    private element: ElementRef,
    private focusMonitor: FocusMonitor
  ) { }


  ngAfterViewInit() {
    const modalCloseButton = this.element.nativeElement.getElementsByClassName('dialog-close-button');
    if (modalCloseButton[0]) {
      this.focusMonitor.stopMonitoring(modalCloseButton[0] as HTMLElement);
    }
  }
}
