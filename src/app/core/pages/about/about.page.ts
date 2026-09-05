import { I18nPipe } from '@/app/core/pipes';
import { Component } from '@angular/core';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonTitle,
    IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline, colorWandOutline, flashOutline, globeOutline, logoAngular, phonePortraitOutline } from 'ionicons/icons';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [I18nPipe, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonIcon],
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.css'],
})
export class AboutPage {
    constructor() {
        addIcons({ logoAngular, phonePortraitOutline, colorWandOutline, flashOutline, chatbubbleEllipsesOutline, globeOutline });
    }
}
