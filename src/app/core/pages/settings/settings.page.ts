import { AppTheme, ThemeService } from '@/app/core/services';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    IonBackButton,
    IonButtons,
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
    IonTitle,
    IonToolbar,
    ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { colorPaletteOutline, informationCircleOutline, trashOutline } from 'ionicons/icons';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        RouterLink,
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
    ],
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.css'],
})
export class SettingsPage {
    protected themeService = inject(ThemeService);
    private toastCtrl = inject(ToastController);

    constructor() {
        addIcons({ colorPaletteOutline, trashOutline, informationCircleOutline });
    }

    onThemeChange(event: any): void {
        const selected = event.detail.value as AppTheme;
        if (selected) {
            this.themeService.setTheme(selected);
        }
    }

    async clearCache(): Promise<void> {
        try {
            // 清理除登录状态外的无用本地缓存
            const token = localStorage.getItem('app_access_token');
            const user = localStorage.getItem('app_user_info');
            const theme = localStorage.getItem('app_theme_preference');

            localStorage.clear();

            if (token) localStorage.setItem('app_access_token', token);
            if (user) localStorage.setItem('app_user_info', user);
            if (theme) localStorage.setItem('app_theme_preference', theme);

            const toast = await this.toastCtrl.create({
                message: '本地临时缓存已清理完成',
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
