import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_CONFIG_TOKEN, IAppConfig } from '../../models/iapp-config.model';
import { IRequestConfig } from './irequest-config';
import { IStorageService } from './istorage.service';
import { REQUEST_CONFIG_TOKEN } from './request-config';
import { Authentication } from '../../models/authentication.model';
import { UserLogin } from 'src/app/models/user-login.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private baseUrl = '';
  private loginEndPoint = 'TOKEN';

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG_TOKEN) config: IAppConfig,
    @Inject('IStorageService') private storageService: IStorageService,
    @Inject(REQUEST_CONFIG_TOKEN) private requestConfig: IRequestConfig
  ) {
    this.baseUrl = config.baseApiUrl;
  }

  login(username: string, password: string): Observable<Authentication> {
    const loginParams = new UserLogin();
    loginParams.username = username;
    loginParams.password = password;

    const urlSearchParams = this.contactParams(loginParams);
    const url = `${this.baseUrl}${this.loginEndPoint}`;
    const body = urlSearchParams;
    const headers = new HttpHeaders().append(this.requestConfig.headers.CONTENT_TYPE, this.requestConfig.headers.WWW_FORM_URLENCODED);
    
    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => {
        const authentication = Authentication.mapFromResponse(response);
        this.storageService.set(this.requestConfig.storage.AUTHENTICATION, authentication.token);
        return authentication;
      })
    );
  }

  contactParams(obj: any): string {
    let urlParams = '';
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (urlParams !== '') {
          urlParams += '&';
        }
        urlParams += key + '=' + encodeURIComponent(obj[key]);
      }
    }
    return urlParams;
  }
}
