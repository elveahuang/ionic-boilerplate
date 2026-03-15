import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
    IonApp,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonNavLink,
    IonRouterLink,
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
    IonApp,
    IonIcon,
    IonButton,
    IonLabel,
    IonToolbar,
    IonRouterOutlet,
    IonRouterLink,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonNavLink,
    IonTitle,
    IonHeader,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    RouterLink,
    RouterLinkActive,
];

@NgModule({
    imports: [...components],
    exports: [...components],
})
export class UiModule {}
