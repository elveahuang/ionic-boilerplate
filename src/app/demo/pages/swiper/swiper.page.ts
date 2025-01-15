import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

@Component({
    selector: 'app-swiper',
    templateUrl: 'swiper.page.html',
    styleUrls: ['swiper.page.scss'],
    imports: [CommonModule, CoreModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperPage implements AfterViewInit {
    @ViewChild('swiperRef') swiperRef?: ElementRef<{ swiper: Swiper }>;

    swiper?: Swiper;

    ngAfterViewInit(): void {
        register();
    }

    onSlideChange(e: any) {
        console.log('changed: ', e);
    }

    setupSwiper(): void {}
}
