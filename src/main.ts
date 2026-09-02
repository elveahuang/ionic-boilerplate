import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { authInterceptor, errorInterceptor } from '@/app/core/interceptors';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi, withXhr } from '@angular/common/http';
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
        provideHttpClient(withXhr(), withInterceptors([authInterceptor, errorInterceptor]), withInterceptorsFromDi()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
};

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));
