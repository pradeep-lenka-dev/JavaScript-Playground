import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  constructor() { }

  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  setTheme(theme:string):void{
    this.themeSubject.next(theme)
    document.body.setAttribute('data-theme',theme);
  }
  getTheme():string{
    return this.themeSubject.getValue();
  }
}
