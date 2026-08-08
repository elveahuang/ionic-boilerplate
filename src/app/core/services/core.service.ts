import { Utils } from '@/app/core/utils';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Platform } from '@ionic/angular/standalone';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreService {
    initialized: boolean = false;

    readySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private platform: Platform,
        private metaService: Meta,
        private titleService: Title,
    ) {}

    ready(): Observable<boolean> {
        if (this.initialized) {
            return new Observable((subscribe: Subscriber<boolean>): void => {
                subscribe.next(true);
            });
        }
        return this.readySubject.asObservable();
    }

    async init(): Promise<void> {
        return Promise.all([this.initPlatform()]).then((): void => {
            Utils.debug('CoreService.init.finished.');
            this.readySubject.next((this.initialized = true));
        });
    }

    async initPlatform(): Promise<void> {
        return this.platform.ready().then((): void => {
            const userAgent: string = window.navigator.userAgent;
            console.log(`'Cur ua - ${userAgent}`);
        });
    }

    async setHtmlMeta(): Promise<void> {
        const title: string = await this.setHtmlTitle();
        this.metaService.addTag({ property: 'og:type', content: 'website' });
        this.metaService.addTag({ property: 'og:title', content: title });
        this.metaService.addTag({ property: 'og:description', content: '' });
        this.metaService.addTag({ property: 'og:site_name', content: title });
    }

    async setHtmlTitle(title: string = ''): Promise<string> {
        return new Promise<string>((resolve) => {
            this.titleService.setTitle(title);
            resolve(title);
        });
    }
}
