import { computed, effect, Injectable, signal } from '@angular/core';

export type AppTheme = 'system' | 'light' | 'dark';

const THEME_STORAGE_KEY = 'app_theme_preference';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    /** 当前选中的主题模式 */
    readonly theme = signal<AppTheme>(this.getInitialTheme());

    /** 系统是否处于深色模式 */
    private readonly systemIsDark = signal<boolean>(this.checkSystemDark());

    /** 实际当前是否呈现为深色模式 (Computed) */
    readonly isDark = computed(() => {
        const mode = this.theme();
        if (mode === 'dark') return true;
        if (mode === 'light') return false;
        return this.systemIsDark();
    });

    constructor() {
        // 监听系统主题偏好变化
        if (typeof window !== 'undefined' && window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                this.systemIsDark.set(e.matches);
            });
        }

        // 响应式同步 DOM 类名
        effect(() => {
            const dark = this.isDark();
            this.applyDomClass(dark);
        });
    }

    /**
     * 设置应用主题
     */
    setTheme(mode: AppTheme): void {
        this.theme.set(mode);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, mode);
        } catch (e) {
            console.warn('Failed to persist theme preference', e);
        }
    }

    private applyDomClass(dark: boolean): void {
        if (typeof document === 'undefined') return;
        const root = document.documentElement;

        // Tailwind CSS 4 .dark 类
        root.classList.toggle('dark', dark);

        // Ionic 9 .ion-palette-dark 类
        root.classList.toggle('ion-palette-dark', dark);
    }

    private getInitialTheme(): AppTheme {
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY) as AppTheme | null;
            if (stored === 'light' || stored === 'dark' || stored === 'system') {
                return stored;
            }
        } catch {
            // fallback
        }
        return 'system';
    }

    private checkSystemDark(): boolean {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    }
}
