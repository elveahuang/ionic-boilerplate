import { ApiService } from '@/app/core/services/api.service';
import { CoreService } from '@/app/core/services/core.service';
import { SharedModule } from '@/app/core/shared.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [CommonModule, IonicModule],
    providers: [CoreService, ApiService],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
        };
    }
}
