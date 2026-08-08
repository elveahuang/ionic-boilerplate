import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CoreModule, IonButton],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor() {}

    async handleClick(): Promise<void> {
        console.log('.....');
    }
}
