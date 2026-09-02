import { Headers, Params, R } from '@/app/core/types';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http: HttpClient = inject(HttpClient);

    get<T = any>(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http.get<R<T>>(endpoint, {
            headers: headers,
            params: params,
        });
    }

    post<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http.post<R<T>>(endpoint, body, {
            headers: headers,
            params: params,
        });
    }

    put<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http.put<R<T>>(endpoint, body, {
            headers: headers,
            params: params,
        });
    }

    patch<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http.patch<R<T>>(endpoint, body, {
            headers: headers,
            params: params,
        });
    }

    delete<T = any>(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http.delete<R<T>>(endpoint, {
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
