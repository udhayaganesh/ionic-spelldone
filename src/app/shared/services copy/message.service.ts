import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MessageService {
  private _subjectSidebar = new Subject();

  stateSidebar = <Observable<any>>this._subjectSidebar;

  toggleSidbar: () => void = () => { };
}
