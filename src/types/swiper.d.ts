import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

type KebabCase<S extends string> = S extends `${infer T}${infer U}`
    ? U extends Uncapitalize<U>
        ? `${Lowercase<T>}${KebabCase<U>}`
        : `${Lowercase<T>}-${KebabCase<U>}`
    : S;

type SwiperElementAttributes<T> = {
    [K in keyof T as KebabCase<Extract<K, string>>]?: T[K] | string | number | boolean;
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': SwiperElementAttributes<SwiperOptions> & {
                class?: string;
                init?: string | boolean;
            };
            'swiper-slide': {
                class?: string;
                lazy?: string | boolean;
            };
        }
    }

    interface HTMLElementTagNameMap {
        'swiper-container': SwiperContainer;
        'swiper-slide': SwiperSlide;
    }
}
