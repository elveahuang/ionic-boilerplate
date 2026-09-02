import { SWIPER_DIRECTIVES, SwiperComponent, SwiperCore } from '@/app/core/components/swiper';
import { Component, signal, viewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-demo-swiper',
    standalone: true,
    templateUrl: 'swiper.page.html',
    styleUrls: ['swiper.page.css'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, ...SWIPER_DIRECTIVES],
})
export class SwiperPage {
    readonly swiperRef = viewChild<SwiperComponent>('swiperRef');

    readonly currentSlide = signal<number>(1);
    readonly totalSlides = 5;

    onSlideChange(swiper: SwiperCore): void {
        this.currentSlide.set(swiper.realIndex + 1);
    }

    onPrev(): void {
        this.swiperRef()?.slidePrev();
    }

    onNext(): void {
        this.swiperRef()?.slideNext();
    }
}
