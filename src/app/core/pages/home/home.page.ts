import { AuthService } from '@/app/core/services/auth.service';
import { WsService } from '@/app/core/services/ws.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar,
    ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
    appsOutline,
    flashOutline,
    logInOutline,
    logOutOutline,
    radioOutline,
    rocketOutline,
    shieldCheckmarkOutline,
} from 'ionicons/icons';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterLink,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonContent,
        IonButton,
        IonIcon,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
        IonList,
        IonItem,
        IonLabel,
        IonBadge,
        IonNote,
    ],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    protected authService = inject(AuthService);
    protected wsService = inject(WsService);
    private toastCtrl = inject(ToastController);

    constructor() {
        addIcons({
            rocketOutline,
            flashOutline,
            appsOutline,
            radioOutline,
            logInOutline,
            logOutOutline,
            shieldCheckmarkOutline,
        });
    }

    async toggleAuth(): Promise<void> {
        if (this.authService.isAuthenticated()) {
            this.authService.logout('');
            const toast = await this.toastCtrl.create({
                message: '已退出登录',
                duration: 1500,
                color: 'medium',
            });
            await toast.present();
        } else {
            await this.authService.login({ username: 'SuperAdmin' });
            const toast = await this.toastCtrl.create({
                message: '登录成功 (Mock JWT Session 已注入)',
                duration: 1500,
                color: 'success',
            });
            await toast.present();
        }
    }
}
