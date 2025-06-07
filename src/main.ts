import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { CoreModule } from '@/app/core/core.module';
import { environment } from '@/environments/environment';
import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouteReuseStrategy, withHashLocation } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

if (environment.production) {
    enableProdMode();
}

register();
bootstrapApplication(AppComponent, {
    providers: [
        provideZonelessChangeDetection(),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular(),
        provideRouter(routes, withHashLocation()),
        importProvidersFrom(CoreModule.forRoot()),
    ],
}).catch((e) => console.error(e));
