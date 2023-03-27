import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonSharedService {
  openTodoDetailsSidenav = new Subject();
  refreshListSubject = new Subject();

  constructor() {}
}