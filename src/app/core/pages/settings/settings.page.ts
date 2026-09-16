import { I18nPipe } from '@/app/core/pipes';
import { AppTheme, I18nService, SupportedLang, ThemeService } from '@/app/core/services';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { colorPaletteOutline, informationCircleOutline, languageOutline, trashOutline } from 'ionicons/icons';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        RouterLink,
        I18nPipe,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonList,
        IonListHeader,
        IonItem,
        IonLabel,
        IonIcon,
        IonNote,
        IonSegment,
        IonSegmentButton,
        IonSelect,
        IonSelectOption,
        IonCard,
        IonCardContent,
        IonButton,
    ],
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.css'],
})
export class SettingsPage {
    protected themeService = inject(ThemeService);
    protected i18nService = inject(I18nService);
    private toastCtrl = inject(ToastController);

    readonly demoCount = signal<number>(1);

    constructor() {
        addIcons({ colorPaletteOutline, trashOutline, informationCircleOutline, languageOutline });
    }

    onThemeChange(event: any): void {
        const selected = event.detail.value as AppTheme;
        if (selected) {
            this.themeService.setTheme(selected);
        }
    }

    async onLangChange(event: any): Promise<void> {
        const selected = event.detail.value as SupportedLang;
        if (selected) {
            await this.i18nService.setLanguage(selected);
        }
    }

    setDemoCount(count: number): void {
        this.demoCount.set(count);
    }

    async clearCache(): Promise<void> {
        try {
            const token = localStorage.getItem('app_access_token');
            const user = localStorage.getItem('app_user_info');
            const theme = localStorage.getItem('app_theme_preference');
            const lang = localStorage.getItem('app_language_preference');

            localStorage.clear();

            if (token) localStorage.setItem('app_access_token', token);
            if (user) localStorage.setItem('app_user_info', user);
            if (theme) localStorage.setItem('app_theme_preference', theme);
            if (lang) localStorage.setItem('app_language_preference', lang);

            const message = this.i18nService.t('settings.clear_cache_success');
            const toast = await this.toastCtrl.create({
                message,
                duration: 1500,
                position: 'bottom',
                color: 'success',
            });
            await toast.present();
        } catch {
            // ignore
        }
    }
}
