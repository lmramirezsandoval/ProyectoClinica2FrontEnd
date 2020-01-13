import { IRequestConfig } from './irequest-config';
import { InjectionToken } from '@angular/core';

export let REQUEST_CONFIG_TOKEN = new InjectionToken('request.config');

export const REQUEST_CONFIG: IRequestConfig = {
  headers: {
    CONTENT_TYPE: 'Content-Type',
    WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
    APPLICATION_JSON: 'application/json; charset=UTF-8',
    AUTHORIZATION: 'Authorization',
    IF_MODIFIED_SINCE: 'If-Modified-Since',
    IF_MODIFIED_SINCE_DEFAULT: 'Mon, 26 Jul 1997 05:00:00 GMT',
    NO_CACHE_DEFAULT: 'no-cache',
    CACHE_CONTROL: 'Cache-Control',
    PRAGMA: 'Pragma'
  },
  storage: {
    AUTHENTICATION: 'authentication-token'
  },
  cookies: {
    ACTIVE_COOKIE: 'ActiveCookie',
    USER_ID: 'UserID',
    SESSION_ID: 'SessionID',
    SESSION_KEY: 'SessionKey',
    SESSION_TOKEN: 'SessionToken'
  }
};
