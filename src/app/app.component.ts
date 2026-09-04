import { CoreService } from '@/app/core/services/core.service';
import { Component, effect, inject, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private coreService: CoreService = inject(CoreService);

    constructor() {
        effect(() => {
            console.log(`ready...${this.coreService.isReady()}`);
        });
    }

    async ngOnInit(): Promise<void> {
        void this.coreService.init().then();
        if (Capacitor.isNativePlatform()) {
            setTimeout(async (): Promise<void> => {
                await SplashScreen.hide().then();
            }, 5000);
        }
    }
}
