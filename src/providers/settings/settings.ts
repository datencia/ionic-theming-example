import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(val) {
    this.theme.next(val);
  }

  getActiveTheme(): Observable<String> {
    return this.theme.asObservable();
  }

}
