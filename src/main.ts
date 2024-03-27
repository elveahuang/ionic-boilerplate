import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { CoreModule } from '@/app/core/core.module';
import { environment } from '@/environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withHashLocation } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular({ mode: 'ios' }),
        provideRouter(routes, withHashLocation()),
        importProvidersFrom(CoreModule.forRoot()),
    ],
}).catch((e) => console.error(e));
