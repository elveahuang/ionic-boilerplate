import { AuthSession, LoginCredentials, User } from '@/app/core/types';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'app_access_token';
const REFRESH_TOKEN_KEY = 'app_refresh_token';
const USER_KEY = 'app_user_info';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private router = inject(Router);

    /** 当前登录用户 Signal */
    readonly currentUser = signal<User | null>(this.getStoredUser());

    /** 当前访问令牌 Signal */
    readonly accessToken = signal<string | null>(this.getStoredToken());

    /** 刷新令牌 Signal */
    readonly refreshToken = signal<string | null>(this.getStoredRefreshToken());

    /** 是否已登录 Computed Signal */
    readonly isAuthenticated = computed(() => Boolean(this.accessToken()));

    /**
     * 登录并保存会话
     */
    async login(credentials: LoginCredentials): Promise<AuthSession> {
        // Mock 登录逻辑或调用实际接口
        const session: AuthSession = {
            token: `mock_jwt_token_${Date.now()}`,
            refreshToken: `mock_refresh_token_${Date.now()}`,
            expiresIn: 3600 * 24 * 7,
            user: {
                id: 1,
                username: credentials.username || 'Admin',
                nickname: 'Administrator',
                avatar: 'assets/icon/favicon.png',
                email: 'admin@example.com',
                roles: ['ADMIN'],
                permissions: ['*:*:*'],
            },
        };

        this.setSession(session);
        return session;
    }

    /**
     * 设置会话状态并持久化
     */
    setSession(session: AuthSession): void {
        this.accessToken.set(session.token);
        this.refreshToken.set(session.refreshToken ?? null);
        this.currentUser.set(session.user);

        try {
            localStorage.setItem(TOKEN_KEY, session.token);
            if (session.refreshToken) {
                localStorage.setItem(REFRESH_TOKEN_KEY, session.refreshToken);
            }
            localStorage.setItem(USER_KEY, JSON.stringify(session.user));
        } catch (e) {
            console.warn('Failed to persist auth session to localStorage', e);
        }
    }

    /**
     * 退出登录并清理存储
     */
    logout(redirectUrl = '/tabs/home'): void {
        this.accessToken.set(null);
        this.refreshToken.set(null);
        this.currentUser.set(null);

        try {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(REFRESH_TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
        } catch (e) {
            console.warn('Failed to remove auth session from localStorage', e);
        }

        if (redirectUrl) {
            this.router.navigateByUrl(redirectUrl);
        }
    }

    /**
     * 更新当前用户信息
     */
    updateUser(partialUser: Partial<User>): void {
        const current = this.currentUser();
        if (!current) return;

        const updated = { ...current, ...partialUser };
        this.currentUser.set(updated);
        try {
            localStorage.setItem(USER_KEY, JSON.stringify(updated));
        } catch (e) {
            console.warn('Failed to persist user update', e);
        }
    }

    /**
     * 判断是否包含特定角色
     */
    hasRole(role: string): boolean {
        const roles = this.currentUser()?.roles ?? [];
        return roles.includes(role) || roles.includes('ADMIN');
    }

    /**
     * 判断是否拥有特定权限
     */
    hasPermission(permission: string): boolean {
        const permissions = this.currentUser()?.permissions ?? [];
        return permissions.includes(permission) || permissions.includes('*:*:*');
    }

    private getStoredToken(): string | null {
        try {
            return localStorage.getItem(TOKEN_KEY);
        } catch {
            return null;
        }
    }

    private getStoredRefreshToken(): string | null {
        try {
            return localStorage.getItem(REFRESH_TOKEN_KEY);
        } catch {
            return null;
        }
    }

    private getStoredUser(): User | null {
        try {
            const data = localStorage.getItem(USER_KEY);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    }
}
