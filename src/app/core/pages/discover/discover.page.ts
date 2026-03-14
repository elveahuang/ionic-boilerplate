import { CoreModule } from '@/app/core/core.module';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-discover',
    imports: [CoreModule],
    templateUrl: 'discover.page.html',
    styleUrls: ['discover.page.scss'],
})
export class DiscoverPage {
    private router: Router = inject(Router);
    private navController: NavController = inject(NavController);

    async goto(): Promise<void> {
        console.log('.....');
        this.router.navigate(['/demo/swiper']).then();
    }
}
