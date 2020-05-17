import { Component, OnInit } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css']
})

export class SpinnerComponent implements OnInit {
  visible = false;
  hideOverlay = false;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this._spinnerService.show = this.show.bind(this);
    this._spinnerService.hide = this.hide.bind(this);
  }

  show(hideOverlay?: boolean): void {
    this.hideOverlay = hideOverlay;
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }
}
