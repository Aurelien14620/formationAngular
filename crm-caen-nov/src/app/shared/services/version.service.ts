import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  public version$ = new BehaviorSubject(1);
  constructor() { }

  public upgrade() {
    this.version$.next(this.version$.value + 1);
  }
}
