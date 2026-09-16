import { Directive, HostBinding, input } from '@angular/core';

@Directive({
    selector: '[appSwiperSlide]',
    standalone: true,
    host: {
        class: 'swiper-slide',
    },
})
export class SwiperSlideDirective {
    readonly virtualIndex = input<number | undefined>(undefined);

    @HostBinding('attr.data-swiper-slide-index')
    get slideIndex(): number | undefined {
        return this.virtualIndex();
    }
}
