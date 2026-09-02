import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface Environment {
    production: boolean;
}

export interface R<T = any> {
    code: number;
    message: string;
    data: T;
}

export type Headers =
    | HttpHeaders
    | {
          [header: string]: string | string[];
      };

export type Params =
    | HttpParams
    | {
          [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };

/** 用户信息接口 */
export interface User {
    id: string | number;
    username: string;
    nickname?: string;
    avatar?: string;
    email?: string;
    phone?: string;
    roles?: string[];
    permissions?: string[];
    [key: string]: any;
}

/** 登录凭据 */
export interface LoginCredentials {
    username: string;
    password?: string;
    captcha?: string;
    code?: string;
    rememberMe?: boolean;
}

/** 鉴权会话 */
export interface AuthSession {
    token: string;
    refreshToken?: string;
    expiresIn?: number;
    user: User;
}

/** WebSocket 消息体 */
export interface WsMessage<T = any> {
    type: string;
    action?: string;
    topic?: string;
    payload?: T;
    timestamp?: number;
    id?: string;
}

/** WebSocket 连接状态 */
export type WsConnectionStatus = 'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'RECONNECTING' | 'ERROR';

/** WebSocket 配置 */
export interface WsConfig {
    url: string;
    protocols?: string | string[];
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
    heartbeatInterval?: number;
    heartbeatMessage?: string | object;
}
