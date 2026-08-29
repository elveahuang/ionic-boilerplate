import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-discover',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink],
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
