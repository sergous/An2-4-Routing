import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  private visible: boolean;

  isVisible(): boolean {
    return this.visible;
  }

  hide(): void {
    this.visible = false;
  }

  show(): void {
    this.visible = true;
  }
  
}
