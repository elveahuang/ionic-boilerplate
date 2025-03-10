import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, CoreModule],
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage {}
