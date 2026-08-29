import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
    templateUrl: 'me.page.html',
    styleUrls: ['me.page.scss'],
})
export class MePage {}
