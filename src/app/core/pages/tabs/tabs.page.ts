import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { ellipse, square, triangle } from 'ionicons/icons';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [CoreModule],
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
    constructor(public coreService: CoreService) {
        addIcons({ triangle, ellipse, square });
        void this.coreService.init().then();
    }
}
