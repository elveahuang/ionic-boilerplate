import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { CoreModule } from '@/app/core/core.module';
import { environment } from '@/environments/environment';
import { ApplicationConfig, enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

if (environment.production) {
    enableProdMode();
}

export const config: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        importProvidersFrom(CoreModule.forRoot()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
};

register();

bootstrapApplication(AppComponent, config).then();
