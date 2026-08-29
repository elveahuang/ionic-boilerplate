import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    handleClick(): void {
        console.log('.....');
    }
}
