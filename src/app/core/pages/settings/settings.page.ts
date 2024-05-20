import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, IonicModule, CoreModule, RouterOutlet],
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {}
