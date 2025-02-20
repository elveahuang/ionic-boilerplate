import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-virtual-scroller',
    templateUrl: 'virtual-scroller.page.html',
    styleUrls: ['virtual-scroller.page.scss'],
    imports: [CommonModule, CoreModule],
})
export class VirtualScrollerPage {}
