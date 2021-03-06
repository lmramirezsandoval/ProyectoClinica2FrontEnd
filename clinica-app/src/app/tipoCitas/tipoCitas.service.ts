import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, mergeMap, first } from 'rxjs/operators';
import { IRequestOptions } from '../authentication/service/irequest-options';
import { APP_CONFIG_TOKEN, IAppConfig } from '../models/iapp-config.model';
import { Cita } from '../models/cita.model';
import { IRequestConfig } from '../authentication/service/irequest-config';
import { REQUEST_CONFIG_TOKEN } from '../authentication/service/request-config';
import { IStorageService } from '../authentication/service/istorage.service';
import { TiposCita } from '../models/tiposCitas.model';

@Injectable()
export class TiposCitasService {
    private baseUrl = "";

    constructor(
        @Inject(APP_CONFIG_TOKEN) private config: IAppConfig,
        @Inject('IStorageService') private storageService: IStorageService,
        @Inject(REQUEST_CONFIG_TOKEN) private requestConfig: IRequestConfig,
        private http: HttpClient
    ) {
        this.baseUrl = config.baseApiUrl;
    }

    public getTipos(): Observable<TiposCita[]> {

        let url = `${this.baseUrl}api/TiposCitas`;
        return this.storageService.get(this.requestConfig.storage.AUTHENTICATION).pipe(
            mergeMap((token: string) => {
                let headersParams = new HttpHeaders().append(this.requestConfig.headers.AUTHORIZATION, 'Bearer ' + token);
                return this.http.get<any>(url, { headers: headersParams }).pipe(
                        map((data: any) => TiposCita.mapFromResponse(data))
                    )
            }));
    }
}