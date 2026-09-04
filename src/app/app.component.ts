import { CoreService, ThemeService } from '@/app/core/services';
import { Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet, Platform, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private coreService = inject(CoreService);
    protected themeService = inject(ThemeService);
    private platform = inject(Platform);
    private router = inject(Router);
    private toastCtrl = inject(ToastController);

    private lastBackTime = 0;

    constructor() {
        effect(() => {
            console.log(`ready...${this.coreService.isReady()}`);
        });

        this.initHardwareBackButton();
    }

    async ngOnInit(): Promise<void> {
        if (Capacitor.isNativePlatform()) {
            await StatusBar.setOverlaysWebView({ overlay: false }).catch(() => {});
        }

        // 启动兜底定时器（避免 init 发生意外导致白屏卡住）
        const safetyTimer = setTimeout(() => {
            if (Capacitor.isNativePlatform()) {
                SplashScreen.hide().catch(() => {});
            }
        }, 1500);

        try {
            await this.coreService.init();
        } finally {
            clearTimeout(safetyTimer);
            if (Capacitor.isNativePlatform()) {
                await SplashScreen.hide().catch(() => {});
            }
        }
    }

    private initHardwareBackButton(): void {
        this.platform.backButton.subscribeWithPriority(10, async () => {
            const currentUrl = this.router.url;
            const isRootPage = currentUrl === '/tabs/home' || currentUrl === '/tabs' || currentUrl === '';

            if (isRootPage) {
                const now = Date.now();
                if (now - this.lastBackTime < 2000) {
                    await App.exitApp();
                } else {
                    this.lastBackTime = now;
                    const toast = await this.toastCtrl.create({
                        message: '再按一次退出应用',
                        duration: 1800,
                        position: 'bottom',
                    });
                    await toast.present();
                }
            }
        });
    }
}
