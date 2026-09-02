import { WsConfig, WsConnectionStatus, WsMessage } from '@/app/core/types';
import { computed, inject, Injectable, NgZone, OnDestroy, signal } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WsService implements OnDestroy {
    private ngZone = inject(NgZone);

    private socket: WebSocket | null = null;
    private config: WsConfig | null = null;
    private reconnectAttempts = 0;
    private reconnectTimer?: ReturnType<typeof setTimeout>;
    private heartbeatTimer?: ReturnType<typeof setInterval>;
    private sendQueue: string[] = [];

    /** 连接状态 Signal */
    readonly status = signal<WsConnectionStatus>('DISCONNECTED');

    /** 是否已连接 Computed Signal */
    readonly isConnected = computed(() => this.status() === 'CONNECTED');

    /** 全局消息流 Subject */
    private readonly messageSubject = new Subject<WsMessage>();
    readonly messages$: Observable<WsMessage> = this.messageSubject.asObservable();

    ngOnDestroy(): void {
        this.disconnect();
    }

    /**
     * 初始化并连接 WebSocket
     */
    connect(config: WsConfig): void {
        this.config = {
            reconnectInterval: 3000,
            maxReconnectAttempts: 10,
            heartbeatInterval: 30000,
            heartbeatMessage: JSON.stringify({ type: 'PING' }),
            ...config,
        };

        this.disconnect();
        this.createConnection();
    }

    private createConnection(): void {
        if (!this.config) return;

        this.status.set(this.reconnectAttempts > 0 ? 'RECONNECTING' : 'CONNECTING');

        this.ngZone.runOutsideAngular(() => {
            try {
                this.socket = new WebSocket(this.config!.url, this.config!.protocols);

                this.socket.onopen = () => {
                    this.ngZone.run(() => {
                        this.status.set('CONNECTED');
                        this.reconnectAttempts = 0;
                        this.startHeartbeat();
                        this.flushQueue();
                    });
                };

                this.socket.onmessage = (event: MessageEvent) => {
                    this.ngZone.run(() => {
                        try {
                            const parsed: WsMessage = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                            this.messageSubject.next(parsed);
                        } catch {
                            this.messageSubject.next({
                                type: 'RAW',
                                payload: event.data,
                                timestamp: Date.now(),
                            });
                        }
                    });
                };

                this.socket.onerror = (error) => {
                    console.error('WebSocket Error:', error);
                    this.ngZone.run(() => {
                        this.status.set('ERROR');
                    });
                };

                this.socket.onclose = () => {
                    this.ngZone.run(() => {
                        this.stopHeartbeat();
                        if (this.status() !== 'DISCONNECTED') {
                            this.status.set('DISCONNECTED');
                            this.scheduleReconnect();
                        }
                    });
                };
            } catch (err) {
                console.error('WebSocket Connection Creation Failed:', err);
                this.ngZone.run(() => {
                    this.status.set('ERROR');
                    this.scheduleReconnect();
                });
            }
        });
    }

    /**
     * 发送消息
     */
    send(message: WsMessage | string | object): boolean {
        const payload = typeof message === 'string' ? message : JSON.stringify(message);

        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(payload);
            return true;
        }

        // 离线入队缓冲
        this.sendQueue.push(payload);
        return false;
    }

    /**
     * 订阅指定类型/主题的消息流
     */
    on<T = any>(type: string): Observable<T> {
        return this.messages$.pipe(
            filter((msg) => msg.type === type),
            map((msg) => msg.payload as T),
        );
    }

    /**
     * 手动关闭连接
     */
    disconnect(): void {
        this.stopHeartbeat();
        this.clearReconnectTimer();

        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }

        this.status.set('DISCONNECTED');
        this.reconnectAttempts = 0;
    }

    private scheduleReconnect(): void {
        if (!this.config) return;

        const maxAttempts = this.config.maxReconnectAttempts ?? 10;
        if (this.reconnectAttempts >= maxAttempts) {
            console.warn(`WebSocket Reconnect reached max attempts (${maxAttempts}).`);
            return;
        }

        this.clearReconnectTimer();

        const baseInterval = this.config.reconnectInterval ?? 3000;
        // 指数退避抖动
        const delay = Math.min(baseInterval * Math.pow(1.5, this.reconnectAttempts), 30000);
        this.reconnectAttempts++;

        this.reconnectTimer = setTimeout(() => {
            this.createConnection();
        }, delay);
    }

    private startHeartbeat(): void {
        this.stopHeartbeat();
        if (!this.config?.heartbeatInterval) return;

        this.heartbeatTimer = setInterval(() => {
            if (this.isConnected() && this.config?.heartbeatMessage) {
                this.send(this.config.heartbeatMessage);
            }
        }, this.config.heartbeatInterval);
    }

    private stopHeartbeat(): void {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = undefined;
        }
    }

    private clearReconnectTimer(): void {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = undefined;
        }
    }

    private flushQueue(): void {
        while (this.sendQueue.length > 0 && this.socket?.readyState === WebSocket.OPEN) {
            const msg = this.sendQueue.shift();
            if (msg) this.socket.send(msg);
        }
    }
}
