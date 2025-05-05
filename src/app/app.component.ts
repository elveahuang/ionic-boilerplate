import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

@Component({
    selector: 'app-root',
    imports: [IonApp, IonRouterOutlet, CoreModule],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
    public injector: EnvironmentInjector = inject(EnvironmentInjector);

    constructor(private coreService: CoreService) {
        register();
        void this.coreService.init().then();
    }

    async ngOnInit(): Promise<void> {
        void this.coreService.init().then();
        this.coreService.ready().subscribe((ready: boolean): void => {
            console.log(`ready...${ready}`);
        });

        if (Capacitor.isNativePlatform()) {
            // For android only.
            await StatusBar.setOverlaysWebView({ overlay: false }).then();

            setTimeout(async (): Promise<void> => {
                await SplashScreen.hide().then();
            }, 5000);
        }
    }
}
