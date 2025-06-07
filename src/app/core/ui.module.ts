import { NgModule } from '@angular/core';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';

const components = [
    IonIcon,
    IonLabel,
    IonToolbar,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonHeader,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
];

@NgModule({
    imports: [...components],
    exports: [...components],
})
export class UiModule {}
