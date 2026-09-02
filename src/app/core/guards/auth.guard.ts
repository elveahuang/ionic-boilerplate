import { AuthService } from '@/app/core/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * 路由鉴权守卫
 */
export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        return true;
    }

    // 未登录时重定向到首页或登录页，并记录原始 target url
    return router.createUrlTree(['/tabs/home'], {
        queryParams: { returnUrl: state.url },
    });
};
