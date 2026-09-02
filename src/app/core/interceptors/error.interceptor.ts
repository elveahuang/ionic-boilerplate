import { AuthService } from '@/app/core/services/auth.service';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { catchError, throwError } from 'rxjs';

/**
 * 全局 HTTP 错误拦截器
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const toastController = inject(ToastController);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let message = '网络异常，请稍后重试';

            if (error.status === 0) {
                message = '无法连接到服务器，请检查网络设置';
            } else if (error.status === 401) {
                message = '登录会话已过期，请重新登录';
                authService.logout();
            } else if (error.status === 403) {
                message = '权限不足，无法访问该资源';
            } else if (error.status === 404) {
                message = '请求的资源不存在';
            } else if (error.status >= 500) {
                message = error.error?.message || '服务器内部错误';
            } else if (error.error?.message) {
                message = error.error.message;
            }

            // 弹出全局 Toast 提示
            toastController
                .create({
                    message: message,
                    duration: 2500,
                    position: 'top',
                    color: 'danger',
                })
                .then((toast) => toast.present());

            return throwError(() => error);
        }),
    );
};
