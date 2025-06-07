import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [CommonModule, CoreModule],
    templateUrl: 'me.page.html',
    styleUrls: ['me.page.scss'],
})
export class MePage {}
