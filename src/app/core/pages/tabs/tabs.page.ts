import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, inject } from '@angular/core';
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
    private coreService: CoreService = inject(CoreService);

    constructor() {
        addIcons({ triangle, ellipse, square });
    }
}
