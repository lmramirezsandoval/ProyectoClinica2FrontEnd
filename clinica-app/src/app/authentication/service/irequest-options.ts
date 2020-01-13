import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IRequestOptions {
  body?: any;
  headers?: HttpHeaders;
  observe?: 'body' | 'response' | string;
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | string;
  withCredentials?: boolean;
}
