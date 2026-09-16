import { AuthService } from '@/app/core/services/auth.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

/**
 * 鉴权拦截器：为请求自动附加 Bearer Token
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.accessToken();

    // 如果包含 token 且请求未手动设置 Authorization 头
    if (token && !req.headers.has('Authorization')) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next(cloned);
    }

    return next(req);
};
