import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-demo-index',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
    templateUrl: 'index.page.html',
    styleUrls: ['index.page.scss'],
})
export class IndexPage {
    handleClick(): void {
        console.log('.....');
    }
}
