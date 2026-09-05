import { I18nService } from '@/app/core/services/i18n.service';
import { Utils } from '@/app/core/utils';
import { env } from '@/environments';
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
    private i18nService: I18nService = inject(I18nService);
    readonly isInitialized = signal<boolean>(false);
    readonly isReady = signal<boolean>(false);

    async init(): Promise<void> {
        await Promise.all([this.initPlatform(), this.i18nService.init(), this.initDevTools()]);
        this.isInitialized.set(true);
        this.isReady.set(true);
        Utils.debug('CoreService.init.finished.');
    }

    async initPlatform(): Promise<void> {
        await this.platform.ready();
        const userAgent: string = window.navigator.userAgent;
        console.log(`Cur ua - ${userAgent}`);
    }

    private async initDevTools(): Promise<void> {
        // 非生产环境下按需动态加载 vConsole 进行移动端调试
        if (!env.production && typeof window !== 'undefined') {
            try {
                const VConsole = (await import('vconsole')).default;
                new VConsole({ theme: 'dark' });
            } catch (e) {
                console.warn('Failed to load VConsole in development', e);
            }
        }
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
