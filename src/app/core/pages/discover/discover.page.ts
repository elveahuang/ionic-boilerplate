import { CoreModule } from '@/app/core/core.module';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-discover',
    standalone: true,
    imports: [CoreModule],
    templateUrl: 'discover.page.html',
    styleUrls: ['discover.page.scss'],
})
export class DiscoverPage {
    private router: Router = inject(Router);

    async goto(): Promise<void> {
        console.log('.....');
        this.router.navigate(['/demo/swiper']).then();
    }
}
