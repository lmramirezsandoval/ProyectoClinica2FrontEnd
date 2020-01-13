import { Observable } from 'rxjs';

export interface IStorageService {
  set(key: string, value: any): Observable<any>;
  get(key: string): Observable<any>;
  remove(key: string): Observable<any>;
}
