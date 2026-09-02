import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { compassOutline, homeOutline, personOutline } from 'ionicons/icons';

@Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.css'],
})
export class TabsPage {
    constructor() {
        addIcons({ homeOutline, compassOutline, personOutline });
    }
}
