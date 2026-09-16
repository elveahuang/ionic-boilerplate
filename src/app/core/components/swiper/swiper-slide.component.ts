import { Component, HostBinding, input } from '@angular/core';

@Component({
    selector: 'app-swiper-slide',
    standalone: true,
    template: `<ng-content></ng-content>`,
    host: {
        class: 'swiper-slide',
    },
    styles: [
        `
            :host {
                display: block;
                flex-shrink: 0;
                width: 100%;
                height: 100%;
                position: relative;
                transition-property: transform;
            }
        `,
    ],
})
export class SwiperSlideComponent {
    readonly virtualIndex = input<number | undefined>(undefined);

    @HostBinding('attr.data-swiper-slide-index')
    get slideIndex(): number | undefined {
        return this.virtualIndex();
    }
}
