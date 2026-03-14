import { ApiService } from '@/app/core/services/api.service';
import { CoreService } from '@/app/core/services/core.service';
import { SharedModule } from '@/app/core/shared.module';
import { UiModule } from '@/app/core/ui.module';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SharedModule, UiModule],
    exports: [CommonModule, SharedModule, UiModule],
    providers: [CoreService, ApiService],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
        };
    }
}
