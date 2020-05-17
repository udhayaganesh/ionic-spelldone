import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  show: (hideOverlay?: boolean) => void = () => { };
  hide: () => void = () => { };
}
