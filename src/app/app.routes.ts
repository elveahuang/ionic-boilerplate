import { TabsPage } from '@/app/core/pages/tabs/tabs.page';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () => import('@/app/core/pages/home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'discover',
                loadComponent: () => import('@/app/core/pages/discover/discover.page').then((m) => m.DiscoverPage),
            },
            {
                path: 'me',
                loadComponent: () => import('@/app/core/pages/me/me.page').then((m) => m.MePage),
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'demo',
        children: [
            {
                path: 'index',
                loadComponent: () => import('@/app/demo/pages/index/index.page').then((m) => m.IndexPage),
            },
            {
                path: 'swiper',
                loadComponent: () => import('@/app/demo/pages/swiper/swiper.page').then((m) => m.SwiperPage),
            },
            {
                path: 'virtual-scroller',
                loadComponent: () => import('@/app/demo/pages/virtual-scroller/virtual-scroller.page').then((m) => m.VirtualScrollerPage),
            },
            {
                path: 'chat',
                loadComponent: () => import('@/app/demo/pages/chat/chat.page').then((m) => m.ChatPage),
            },
            {
                path: '',
                redirectTo: '/demo/index',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
    {
        path: 'settings',
        loadComponent: () => import('@/app/core/pages/settings/settings.page').then((m) => m.SettingsPage),
    },
    {
        path: 'about',
        loadComponent: () => import('@/app/core/pages/about/about.page').then((m) => m.AboutPage),
    },
];
