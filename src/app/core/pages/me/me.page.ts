import { AuthService } from '@/app/core/services/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
    chevronForwardOutline,
    helpCircleOutline,
    informationCircleOutline,
    logInOutline,
    logOutOutline,
    personCircleOutline,
    settingsOutline,
    shieldCheckmarkOutline,
} from 'ionicons/icons';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [
        RouterLink,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardContent,
        IonAvatar,
        IonLabel,
        IonButton,
        IonIcon,
        IonList,
        IonItem,
    ],
    templateUrl: 'me.page.html',
    styleUrls: ['me.page.scss'],
})
export class MePage {
    protected authService = inject(AuthService);
    private toastCtrl = inject(ToastController);

    constructor() {
        addIcons({
            personCircleOutline,
            settingsOutline,
            informationCircleOutline,
            helpCircleOutline,
            shieldCheckmarkOutline,
            chevronForwardOutline,
            logInOutline,
            logOutOutline,
        });
    }

    async toggleLogin(): Promise<void> {
        if (this.authService.isAuthenticated()) {
            this.authService.logout('');
            const toast = await this.toastCtrl.create({
                message: '已退出登录',
                duration: 1500,
                color: 'medium',
            });
            await toast.present();
        } else {
            await this.authService.login({ username: 'Admin' });
            const toast = await this.toastCtrl.create({
                message: '登录成功',
                duration: 1500,
                color: 'success',
            });
            await toast.present();
        }
    }
}
