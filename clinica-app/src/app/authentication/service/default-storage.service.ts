import { IStorageService } from './istorage.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DefaultStorageService implements IStorageService {
  constructor() {
    //
  }

  public set(key: string, value: string): Observable<any> {
    sessionStorage.setItem(key, value);
    return of(value);
  }

  public get(key: string): Observable<any> {
    return of(sessionStorage.getItem(key));
  }

  public remove(key: string): Observable<any> {
    sessionStorage.removeItem(key);
    return of(key);
  }
}
