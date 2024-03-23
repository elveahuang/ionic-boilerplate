import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, EnvironmentInjector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { ellipse, square, triangle } from 'ionicons/icons';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [CoreModule, RouterOutlet],
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
    constructor(
        public environmentInjector: EnvironmentInjector,
        public coreService: CoreService,
    ) {
        addIcons({ triangle, ellipse, square });
        void this.coreService.init().then();
    }
}
