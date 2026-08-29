import { AfterViewInit, Component, computed, ElementRef, inject, input, NgZone, OnDestroy, output, signal, viewChild } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import type { AutoplayOptions, NavigationOptions, PaginationOptions, ScrollbarOptions, SwiperOptions } from './swiper.types';

@Component({
    selector: 'app-swiper',
    standalone: true,
    template: `
        <div #container class="swiper" [class]="customClass()">
            <div class="swiper-wrapper">
                <ng-content></ng-content>
            </div>
            @if (showPagination()) {
                <div #paginationEl class="swiper-pagination"></div>
            }
            @if (showNavigation()) {
                <div #prevEl class="swiper-button-prev"></div>
                <div #nextEl class="swiper-button-next"></div>
            }
            @if (showScrollbar()) {
                <div #scrollbarEl class="swiper-scrollbar"></div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .swiper {
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
    // 容器引用
    readonly containerRef = viewChild<ElementRef<HTMLDivElement>>('container');
    readonly paginationRef = viewChild<ElementRef<HTMLDivElement>>('paginationEl');
    readonly prevRef = viewChild<ElementRef<HTMLDivElement>>('prevEl');
    readonly nextRef = viewChild<ElementRef<HTMLDivElement>>('nextEl');
    readonly scrollbarRef = viewChild<ElementRef<HTMLDivElement>>('scrollbarEl');

    // 核心配置输入
    readonly config = input<SwiperOptions>({});
    readonly customClass = input<string>('');

    // 快捷参数输入
    readonly direction = input<SwiperOptions['direction']>('horizontal');
    readonly loop = input<boolean>(false);
    readonly speed = input<number>(300);
    readonly slidesPerView = input<number | 'auto'>(1);
    readonly spaceBetween = input<number>(0);
    readonly effect = input<SwiperOptions['effect']>('slide');
    readonly autoHeight = input<boolean>(false);
    readonly centeredSlides = input<boolean>(false);
    readonly grabCursor = input<boolean>(false);
    readonly allowTouchMove = input<boolean>(true);
    readonly autoplay = input<boolean | AutoplayOptions>(false);
    readonly pagination = input<boolean | PaginationOptions>(false);
    readonly navigation = input<boolean | NavigationOptions>(false);
    readonly scrollbar = input<boolean | ScrollbarOptions>(false);
    readonly breakpoints = input<SwiperOptions['breakpoints']>(undefined);

    // 状态 Signal
    readonly swiperInstance = signal<Swiper | null>(null);
    readonly activeIndex = signal<number>(0);
    readonly realIndex = signal<number>(0);
    readonly isBeginning = signal<boolean>(true);
    readonly isEnd = signal<boolean>(false);

    // 计算属性判断是否渲染内置控制器元素
    readonly showPagination = computed(() => {
        const p = this.pagination();
        const cp = this.config().pagination;
        return Boolean(p || cp);
    });

    readonly showNavigation = computed(() => {
        const n = this.navigation();
        const cn = this.config().navigation;
        return Boolean(n || cn);
    });

    readonly showScrollbar = computed(() => {
        const s = this.scrollbar();
        const cs = this.config().scrollbar;
        return Boolean(s || cs);
    });

    // 事件 Output
    readonly swiperInit = output<Swiper>();
    readonly slideChange = output<Swiper>();
    readonly activeIndexChange = output<number>();
    readonly realIndexChange = output<number>();
    readonly slideChangeTransitionStart = output<Swiper>();
    readonly slideChangeTransitionEnd = output<Swiper>();
    readonly reachBeginning = output<Swiper>();
    readonly reachEnd = output<Swiper>();
    readonly swiperTap = output<Swiper>();
    readonly swiperClick = output<Swiper>();
    readonly swiperDoubleTap = output<Swiper>();
    readonly autoplayStart = output<Swiper>();
    readonly autoplayStop = output<Swiper>();

    private ngZone = inject(NgZone);
    private swiper?: Swiper;

    ngAfterViewInit(): void {
        this.initSwiper();
    }

    ngOnDestroy(): void {
        this.destroySwiper();
    }

    private initSwiper(): void {
        const container = this.containerRef()?.nativeElement;
        if (!container) return;

        const options = this.buildOptions();

        this.ngZone.runOutsideAngular(() => {
            this.swiper = new Swiper(container, options);

            this.bindEvents(this.swiper);

            this.ngZone.run(() => {
                this.swiperInstance.set(this.swiper ?? null);
                this.updateState();
                if (this.swiper) {
                    this.swiperInit.emit(this.swiper);
                }
            });
        });
    }

    private buildOptions(): SwiperOptions {
        const merged: SwiperOptions = {
            direction: this.direction(),
            loop: this.loop(),
            speed: this.speed(),
            slidesPerView: this.slidesPerView(),
            spaceBetween: this.spaceBetween(),
            effect: this.effect(),
            autoHeight: this.autoHeight(),
            centeredSlides: this.centeredSlides(),
            grabCursor: this.grabCursor(),
            allowTouchMove: this.allowTouchMove(),
            breakpoints: this.breakpoints(),
            ...this.config(),
        };

        // 处理 Autoplay
        const ap = this.autoplay();
        if (typeof ap === 'boolean') {
            if (ap) merged.autoplay = { delay: 3000, disableOnInteraction: false };
        } else if (ap) {
            merged.autoplay = ap;
        }

        // 处理 Pagination
        if (this.showPagination()) {
            const paginationEl = this.paginationRef()?.nativeElement;
            const paginationInput = this.pagination();
            const configPagination = this.config().pagination;

            merged.pagination = {
                el: paginationEl,
                clickable: true,
                ...(typeof paginationInput === 'object' ? paginationInput : {}),
                ...(typeof configPagination === 'object' ? configPagination : {}),
            };
        }

        // 处理 Navigation
        if (this.showNavigation()) {
            const prevEl = this.prevRef()?.nativeElement;
            const nextEl = this.nextRef()?.nativeElement;
            const navigationInput = this.navigation();
            const configNavigation = this.config().navigation;

            merged.navigation = {
                prevEl: prevEl,
                nextEl: nextEl,
                ...(typeof navigationInput === 'object' ? navigationInput : {}),
                ...(typeof configNavigation === 'object' ? configNavigation : {}),
            };
        }

        // 处理 Scrollbar
        if (this.showScrollbar()) {
            const scrollbarEl = this.scrollbarRef()?.nativeElement;
            const scrollbarInput = this.scrollbar();
            const configScrollbar = this.config().scrollbar;

            merged.scrollbar = {
                el: scrollbarEl,
                draggable: true,
                ...(typeof scrollbarInput === 'object' ? scrollbarInput : {}),
                ...(typeof configScrollbar === 'object' ? configScrollbar : {}),
            };
        }

        return merged;
    }

    private bindEvents(swiper: Swiper): void {
        swiper.on('slideChange', () => {
            this.ngZone.run(() => {
                this.updateState();
                this.slideChange.emit(swiper);
                this.activeIndexChange.emit(swiper.activeIndex);
                this.realIndexChange.emit(swiper.realIndex);
            });
        });

        swiper.on('slideChangeTransitionStart', () => {
            this.ngZone.run(() => this.slideChangeTransitionStart.emit(swiper));
        });

        swiper.on('slideChangeTransitionEnd', () => {
            this.ngZone.run(() => this.slideChangeTransitionEnd.emit(swiper));
        });

        swiper.on('reachBeginning', () => {
            this.ngZone.run(() => {
                this.isBeginning.set(true);
                this.reachBeginning.emit(swiper);
            });
        });

        swiper.on('reachEnd', () => {
            this.ngZone.run(() => {
                this.isEnd.set(true);
                this.reachEnd.emit(swiper);
            });
        });

        swiper.on('tap', () => {
            this.ngZone.run(() => this.swiperTap.emit(swiper));
        });

        swiper.on('click', () => {
            this.ngZone.run(() => this.swiperClick.emit(swiper));
        });

        swiper.on('doubleTap', () => {
            this.ngZone.run(() => this.swiperDoubleTap.emit(swiper));
        });

        swiper.on('autoplayStart', () => {
            this.ngZone.run(() => this.autoplayStart.emit(swiper));
        });

        swiper.on('autoplayStop', () => {
            this.ngZone.run(() => this.autoplayStop.emit(swiper));
        });
    }

    private updateState(): void {
        if (!this.swiper) return;
        this.activeIndex.set(this.swiper.activeIndex);
        this.realIndex.set(this.swiper.realIndex);
        this.isBeginning.set(this.swiper.isBeginning);
        this.isEnd.set(this.swiper.isEnd);
    }

    private destroySwiper(): void {
        if (this.swiper) {
            this.swiper.destroy(true, true);
            this.swiper = undefined;
            this.swiperInstance.set(null);
        }
    }

    // 公共 API 方法
    slideNext(speed?: number, runCallbacks?: boolean): void {
        this.swiper?.slideNext(speed, runCallbacks);
    }

    slidePrev(speed?: number, runCallbacks?: boolean): void {
        this.swiper?.slidePrev(speed, runCallbacks);
    }

    slideTo(index: number, speed?: number, runCallbacks?: boolean): void {
        this.swiper?.slideTo(index, speed, runCallbacks);
    }

    slideToLoop(index: number, speed?: number, runCallbacks?: boolean): void {
        this.swiper?.slideToLoop(index, speed, runCallbacks);
    }

    update(): void {
        this.swiper?.update();
        this.updateState();
    }

    startAutoplay(): void {
        this.swiper?.autoplay?.start();
    }

    stopAutoplay(): void {
        this.swiper?.autoplay?.stop();
    }
}
