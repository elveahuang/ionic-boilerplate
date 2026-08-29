import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

export const config: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withFetch()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
};

register();

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));
