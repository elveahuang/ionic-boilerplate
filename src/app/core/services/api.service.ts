import { Headers, R } from '@/app/core/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    get(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<R> {
        return this.http.get<R>(endpoint, {
            headers: headers,
            params: params,
        });
    }

    getText(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<string> {
        return this.http.get(endpoint, {
            headers: headers,
            params: params,
            responseType: 'text',
        });
    }

    getBlob(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<Blob> {
        return this.http.get(endpoint, {
            headers: headers,
            params: params,
            responseType: 'blob',
        });
    }
}
