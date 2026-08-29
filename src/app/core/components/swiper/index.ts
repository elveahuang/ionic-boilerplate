import { SwiperSlideComponent } from './swiper-slide.component';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { SwiperComponent } from './swiper.component';

export * from './swiper-slide.component';
export * from './swiper-slide.directive';
export * from './swiper.component';
export * from './swiper.types';

export const SWIPER_DIRECTIVES = [SwiperComponent, SwiperSlideComponent, SwiperSlideDirective] as const;
