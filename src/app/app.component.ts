import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, inject, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CoreModule],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private coreService: CoreService = inject(CoreService);

    async ngOnInit(): Promise<void> {
        void this.coreService.init().then();
        this.coreService.ready().subscribe((ready: boolean): void => {
            console.log(`ready...${ready}`);
        });
        if (Capacitor.isNativePlatform()) {
            await StatusBar.setOverlaysWebView({ overlay: false }).then();
            setTimeout(async (): Promise<void> => {
                await SplashScreen.hide().then();
            }, 5000);
        }
    }
}
