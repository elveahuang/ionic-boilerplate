import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline, chevronForwardOutline, cropOutline, imagesOutline, listOutline } from 'ionicons/icons';

@Component({
    selector: 'app-demo-index',
    standalone: true,
    imports: [
        RouterLink,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonIcon,
        IonNote,
    ],
    templateUrl: 'index.page.html',
    styleUrls: ['index.page.scss'],
})
export class IndexPage {
    readonly demoItems = [
        {
            title: 'Virtual Scroller (虚拟列表)',
            description: '基于 @tanstack/angular-virtual 的 10,000+ 条目高性能滚动',
            route: '/demo/virtual-scroller',
            icon: 'list-outline',
            color: 'primary',
        },
        {
            title: 'Image Cropper (图片裁剪)',
            description: '基于 CropperJS v2 Web Components 深度封装的裁剪器',
            route: '/demo/cropper',
            icon: 'crop-outline',
            color: 'success',
        },
        {
            title: 'Swiper Carousel (轮播图)',
            description: '基于 Swiper 14 的响应式 Signal 轮播图组件',
            route: '/demo/swiper',
            icon: 'images-outline',
            color: 'tertiary',
        },
        {
            title: 'AI Chat Assistant (AI 对话)',
            description: '基于 Vercel AI SDK 的智能对话交互演示',
            route: '/demo/chat',
            icon: 'chatbubble-ellipses-outline',
            color: 'warning',
        },
    ];

    constructor() {
        addIcons({ listOutline, cropOutline, imagesOutline, chatbubbleEllipsesOutline, chevronForwardOutline });
    }
}
