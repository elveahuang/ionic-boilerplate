import { CoreService } from '@/app/core/services';
import { Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonApp, IonRouterOutlet, Platform, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private coreService: CoreService = inject(CoreService);
    private platform: Platform = inject(Platform);
    private router: Router = inject(Router);
    private toastCtrl: ToastController = inject(ToastController);
    private lastBackTime: number = 0;

    constructor() {
        effect((): void => {
            console.log(`ready...${this.coreService.isReady()}`);
        });
        this.initHardwareBackButton();
    }

    async ngOnInit(): Promise<void> {
        // 启动兜底定时器避免初始化发生意外导致白屏卡住
        const safetyTimer = setTimeout((): void => {
            if (Capacitor.isNativePlatform()) {
                SplashScreen.hide().catch(() => {});
            }
        }, 1500);

        try {
            await this.coreService.init();
        } finally {
            clearTimeout(safetyTimer);

            if (Capacitor.isNativePlatform()) {
                await SplashScreen.hide().then();
            }
        }
    }

    private initHardwareBackButton(): void {
        this.platform.backButton.subscribeWithPriority(10, async (): Promise<void> => {
            const currentUrl: string = this.router.url;
            const isRootPage: boolean = currentUrl === '/tabs/home' || currentUrl === '/tabs' || currentUrl === '';
            if (isRootPage) {
                const now: number = Date.now();
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
