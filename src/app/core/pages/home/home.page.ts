import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, IonicModule, CoreModule, RouterOutlet],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {}
