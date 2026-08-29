import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

export const config: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({
            backButtonText: '',
            mode: 'ios',
        }),
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
};

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));
