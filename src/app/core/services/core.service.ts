import { Utils } from '@/app/core/utils';
import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class CoreService {
    private platform: Platform = inject(Platform);
    private metaService: Meta = inject(Meta);
    private titleService: Title = inject(Title);
    readonly isInitialized = signal<boolean>(false);
    readonly isReady = signal<boolean>(false);

    async init(): Promise<void> {
        await this.initPlatform();
        this.isInitialized.set(true);
        this.isReady.set(true);
        Utils.debug('CoreService.init.finished.');
    }

    async initPlatform(): Promise<void> {
        await this.platform.ready();
        const userAgent: string = window.navigator.userAgent;
        console.log(`Cur ua - ${userAgent}`);
    }

    async setHtmlMeta(): Promise<void> {
        const title: string = await this.setHtmlTitle();
        this.metaService.addTag({ property: 'og:type', content: 'website' });
        this.metaService.addTag({ property: 'og:title', content: title });
        this.metaService.addTag({ property: 'og:description', content: '' });
        this.metaService.addTag({ property: 'og:site_name', content: title });
    }

    async setHtmlTitle(title: string = ''): Promise<string> {
        this.titleService.setTitle(title);
        return title;
    }
}
