import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    OnDestroy,
    viewChild,
} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { Swiper } from 'swiper/bundle';

@Component({
    selector: 'app-swiper',
    standalone: true,
    templateUrl: 'swiper.page.html',
    styleUrls: ['swiper.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperPage implements AfterViewInit, OnDestroy {
    private swiperContainer = viewChild<ElementRef<HTMLDivElement>>('swiperContainer');
    private swiperInstance?: Swiper;

    ngAfterViewInit(): void {
        const swiperElement = this.swiperContainer()?.nativeElement;
        if (swiperElement && swiperElement instanceof HTMLElement) {
            console.log(swiperElement);
            console.log(swiperElement.nodeType);
            console.log(typeof swiperElement);
            this.swiperInstance = new Swiper(swiperElement, {
                // 配置参数
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                virtual: {
                    enabled: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }

    onSlideChange(e: any) {
        console.log('changed: ', e);
    }

    ngOnDestroy() {
        this.swiperInstance?.destroy();
    }
}
