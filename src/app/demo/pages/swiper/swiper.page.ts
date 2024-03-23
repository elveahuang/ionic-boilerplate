import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.page.html',
    styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage {
    onSegmentChange($event: any) {
        console.log($event);
    }
}
