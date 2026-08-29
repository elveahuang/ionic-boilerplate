import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-virtual-scroller',
    standalone: true,
    templateUrl: 'virtual-scroller.page.html',
    styleUrls: ['virtual-scroller.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class VirtualScrollerPage {}

