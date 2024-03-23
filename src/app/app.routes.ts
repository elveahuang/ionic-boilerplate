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
