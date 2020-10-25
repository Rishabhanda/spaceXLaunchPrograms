import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    BASE_URL = environment.baseURL;
    headers: HttpHeaders;
    constructor(private http: HttpClient) { }

    get<T>(path: string, queryParams?: {}): Observable<T> {
        const params = this.setParams(queryParams);
        return this.callApi<T>('GET', path, null, params);
    }

    callApi<T>(method: string, path: string, data?: any, params = {}): Observable<T> {
        return this.http.request<T>(
            method,
            environment.baseURL + path,
            { body: data, headers: this.headers, params }
        ).pipe(catchError(error => {
            return throwError(error);
        }));
    }

    setParams(queryParams: {}) {
        // this.setApiHeaders();
        let params = new HttpParams();
        if (queryParams) {
            params = this.getQueryParams(queryParams);
        }
        return params;
    }

    getQueryParams(queryParams?: {}): HttpParams {
        let params = new HttpParams();
        if (queryParams) {
            Object.keys(queryParams).forEach((key) => {
                params = params.append(key, queryParams[key]);
            });
        }
        return params;
    }

    // setApiHeaders(): void {
    //     const header = { 'Access-Control-Allow-Origin': '*' };
    //     this.headers = new HttpHeaders(header);
    // }
}
