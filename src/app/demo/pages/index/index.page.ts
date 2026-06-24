import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-index',
    standalone: true,
    templateUrl: 'index.page.html',
    styleUrls: ['index.page.scss'],
    imports: [CommonModule, CoreModule],
})
export class IndexPage {
    constructor() {}

    async handleClick(): Promise<void> {
        console.log('.....');
    }
}
