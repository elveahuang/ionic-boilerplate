import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/types';

@Component({
    selector: 'app-swiper',
    templateUrl: 'swiper.page.html',
    styleUrls: ['swiper.page.scss'],
    imports: [CommonModule, CoreModule],
})
export class SwiperPage implements AfterViewInit, OnDestroy {
    @ViewChild('swiperContainer')
    swiperContainer?: ElementRef<HTMLDivElement>;
    swiperInstance?: Swiper;

    ngAfterViewInit(): void {
        this.swiperInstance = new Swiper(this.swiperContainer?.nativeElement as HTMLDivElement, {
            // 注册模块
            modules: [Navigation, Pagination, Autoplay],
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

    onSlideChange(e: any) {
        console.log('changed: ', e);
    }

    ngOnDestroy() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy();
        }
    }
}
