import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, EnvironmentInjector, inject } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [CoreModule],
    templateUrl: './app.component.html',
    standalone: true,
})
export class AppComponent {
    public environmentInjector: EnvironmentInjector = inject(EnvironmentInjector);

    constructor(public coreService: CoreService) {
        void this.coreService.init().then();
    }
}
