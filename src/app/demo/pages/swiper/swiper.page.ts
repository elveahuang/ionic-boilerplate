import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';

register();
@Component({
    selector: 'app-swiper',
    standalone: true,
    templateUrl: 'swiper.page.html',
    styleUrls: ['swiper.page.scss'],
    imports: [CommonModule, CoreModule],
})
export class SwiperPage implements AfterViewInit, OnDestroy {
    private swiperContainer = viewChild<ElementRef<HTMLDivElement>>('swiperContainer');
    private swiperInstance?: Swiper;

    ngAfterViewInit(): void {
        const swiperElement = this.swiperContainer()?.nativeElement;
        if (swiperElement instanceof HTMLElement) {
            console.log(swiperElement);
            this.swiperInstance = new Swiper(swiperElement, {
                // 配置参数
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            });
        }
    }

    onSlideChange(e: any) {
        console.log('changed: ', e);
    }

    ngOnDestroy() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy();
        }
    }
}
