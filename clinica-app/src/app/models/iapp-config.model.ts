import { Injectable, InjectionToken } from '@angular/core';

export let APP_CONFIG_TOKEN = new InjectionToken('app.config');

export class IAppConfig {
  production: boolean;
  baseApiUrl: string;
}
