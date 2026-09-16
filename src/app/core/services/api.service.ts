import { Headers, Params, R } from '@/app/core/types';
import { env } from '@/environments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http: HttpClient = inject(HttpClient);
    private defaultTimeout = env.timeoutMs || 15000;

    /**
     * 解析完整请求 URL
     */
    private resolveUrl(endpoint: string): string {
        if (/^https?:\/\//i.test(endpoint) || endpoint.startsWith('//')) {
            return endpoint;
        }
        const base = env.apiBaseUrl || '';
        return `${base}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
    }

    get<T = any>(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http
            .get<R<T>>(this.resolveUrl(endpoint), {
                headers: headers,
                params: params,
            })
            .pipe(timeout(this.defaultTimeout));
    }

    post<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http
            .post<R<T>>(this.resolveUrl(endpoint), body, {
                headers: headers,
                params: params,
            })
            .pipe(timeout(this.defaultTimeout));
    }

    put<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http
            .put<R<T>>(this.resolveUrl(endpoint), body, {
                headers: headers,
                params: params,
            })
            .pipe(timeout(this.defaultTimeout));
    }

    patch<T = any>(endpoint: string, body: any = {}, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http
            .patch<R<T>>(this.resolveUrl(endpoint), body, {
                headers: headers,
                params: params,
            })
            .pipe(timeout(this.defaultTimeout));
    }

    delete<T = any>(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<R<T>> {
        return this.http
            .delete<R<T>>(this.resolveUrl(endpoint), {
                headers: headers,
                params: params,
            })
            .pipe(timeout(this.defaultTimeout));
    }

    getText(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<string> {
        return this.http
            .get(this.resolveUrl(endpoint), {
                headers: headers,
                params: params,
                responseType: 'text',
            })
            .pipe(timeout(this.defaultTimeout));
    }

    getBlob(endpoint: string, params: Params = {}, headers: Headers = {}): Observable<Blob> {
        return this.http
            .get(this.resolveUrl(endpoint), {
                headers: headers,
                params: params,
                responseType: 'blob',
            })
            .pipe(timeout(this.defaultTimeout));
    }
}
