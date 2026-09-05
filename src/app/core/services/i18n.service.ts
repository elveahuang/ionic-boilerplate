import { computed, Injectable, signal } from '@angular/core';
import { Device } from '@capacitor/device';
import i18next, { TOptions } from 'i18next';
import HttpBackend from 'i18next-http-backend';

export type SupportedLang = 'zh-CN' | 'en-US';

export interface LangOption {
    code: SupportedLang;
    label: string;
}

const STORAGE_LANG_KEY = 'app_language_preference';

@Injectable({
    providedIn: 'root',
})
export class I18nService {
    /** 支持的语言列表 */
    readonly availableLangs: LangOption[] = [
        { code: 'zh-CN', label: '简体中文' },
        { code: 'en-US', label: 'English' },
    ];

    /** 当前语言 Signal */
    readonly currentLang = signal<SupportedLang>('zh-CN');

    /** 响应式版本信号：语言切换时自增，驱动模板与组件细粒度实时刷新 */
    readonly version = signal<number>(0);

    /** 初始化状态 */
    readonly isInitialized = signal<boolean>(false);

    /** 当前语言名称 (Computed) */
    readonly currentLangLabel = computed(() => {
        const item = this.availableLangs.find((l) => l.code === this.currentLang());
        return item ? item.label : this.currentLang();
    });

    private initPromise?: Promise<void>;

    /**
     * 初始化 i18next 实例
     */
    async init(): Promise<void> {
        if (this.isInitialized()) return;
        if (this.initPromise) return this.initPromise;

        this.initPromise = (async () => {
            const initialLang = await this.detectLanguage();

            await i18next.use(HttpBackend).init({
                lng: initialLang,
                fallbackLng: 'zh-CN',
                backend: {
                    loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
                },
                interpolation: {
                    escapeValue: false, // Angular 原生防御 XSS
                },
            });

            this.currentLang.set(initialLang);
            this.isInitialized.set(true);

            // 监听 i18next 内部语言切换事件并桥接至 Angular Signal
            i18next.on('languageChanged', (lng) => {
                this.currentLang.set(lng as SupportedLang);
                this.version.update((v) => v + 1);
            });
        })();

        return this.initPromise;
    }

    /**
     * 运行时动态切换语言（零刷新秒切）
     */
    async setLanguage(lang: SupportedLang): Promise<void> {
        if (!this.isInitialized()) {
            await this.init();
        }

        await i18next.changeLanguage(lang);
        try {
            localStorage.setItem(STORAGE_LANG_KEY, lang);
        } catch (e) {
            console.warn('Failed to persist language preference', e);
        }
    }

    /**
     * 核心翻译方法（支持嵌套 Key、插值、复数、格式化）
     */
    t(key: string, options?: TOptions | string): string {
        // 建立 Signal 响应式依赖
        this.version();
        if (!this.isInitialized()) {
            return key;
        }
        return i18next.t(key, options as any) as string;
    }

    /**
     * 探测系统或设备语言
     */
    private async detectLanguage(): Promise<SupportedLang> {
        try {
            const stored = localStorage.getItem(STORAGE_LANG_KEY) as SupportedLang | null;
            if (stored === 'zh-CN' || stored === 'en-US') {
                return stored;
            }
        } catch {
            // ignore
        }

        // 探测移动设备原生语言
        try {
            const info = await Device.getLanguageCode();
            if (info?.value?.toLowerCase().startsWith('zh')) {
                return 'zh-CN';
            }
        } catch {
            // Web 环境使用 navigator
            if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('zh')) {
                return 'zh-CN';
            }
        }

        return 'en-US';
    }
}
