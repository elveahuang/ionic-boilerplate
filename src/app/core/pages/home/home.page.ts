import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CoreModule],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {}
