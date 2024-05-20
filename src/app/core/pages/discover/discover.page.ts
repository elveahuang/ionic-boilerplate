import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-discover',
    standalone: true,
    imports: [CommonModule, IonicModule, CoreModule, RouterOutlet],
    templateUrl: 'discover.page.html',
    styleUrls: ['discover.page.scss'],
})
export class DiscoverPage {}
