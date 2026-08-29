import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    inject,
    input,
    NgZone,
    OnDestroy,
    output,
    signal,
    viewChild,
} from '@angular/core';
import 'cropperjs';
import type {
    CropperActionType,
    CropperCanvas,
    CropperCropData,
    CropperCropOptions,
    CropperElements,
    CropperFitType,
    CropperImage,
    CropperSelection,
} from './cropper.types';

@Component({
    selector: 'app-cropper',
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <cropper-canvas
            #canvasRef
            [attr.background]="background() ? '' : null"
            [attr.disabled]="disabled() ? '' : null"
            [attr.scale-step]="scaleStep()"
            [attr.theme-color]="themeColor()"
            [style.height]="height()"
            [class]="customClass()"
        >
            <cropper-image
                #imageRef
                [attr.src]="src()"
                [attr.alt]="alt()"
                [attr.rotatable]="rotatable() ? '' : null"
                [attr.scalable]="scalable() ? '' : null"
                [attr.skewable]="skewable() ? '' : null"
                [attr.translatable]="translatable() ? '' : null"
                [attr.initial-fit]="initialFit()"
            ></cropper-image>

            @if (showShade()) {
                <cropper-shade></cropper-shade>
            }

            <cropper-selection
                #selectionRef
                [attr.initial-coverage]="initialCoverage()"
                [attr.aspect-ratio]="aspectRatio() ?? null"
                [attr.initial-aspect-ratio]="initialAspectRatio() ?? null"
                [attr.movable]="movable() ? '' : null"
                [attr.resizable]="resizable() ? '' : null"
                [attr.zoomable]="zoomable() ? '' : null"
                [attr.keyboard]="keyboard() ? '' : null"
                [attr.outlined]="outlined() ? '' : null"
                [attr.precise]="precise() ? '' : null"
                [attr.dynamic]="dynamic() ? '' : null"
            >
                @if (showGrid()) {
                    <cropper-grid></cropper-grid>
                }
                @if (showCrosshair()) {
                    <cropper-crosshair></cropper-crosshair>
                }
                <cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.35)"></cropper-handle>
                <cropper-handle action="n-resize"></cropper-handle>
                <cropper-handle action="e-resize"></cropper-handle>
                <cropper-handle action="s-resize"></cropper-handle>
                <cropper-handle action="w-resize"></cropper-handle>
                <cropper-handle action="ne-resize"></cropper-handle>
                <cropper-handle action="nw-resize"></cropper-handle>
                <cropper-handle action="se-resize"></cropper-handle>
                <cropper-handle action="sw-resize"></cropper-handle>
            </cropper-selection>
        </cropper-canvas>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                width: 100%;
            }
            cropper-canvas {
                display: block;
                width: 100%;
                overflow: hidden;
            }
        `,
    ],
})
export class CropperComponent implements AfterViewInit, OnDestroy {
    private ngZone = inject(NgZone);

    // DOM 元素引用
    readonly canvasRef = viewChild<ElementRef<CropperCanvas>>('canvasRef');
    readonly imageRef = viewChild<ElementRef<CropperImage>>('imageRef');
    readonly selectionRef = viewChild<ElementRef<CropperSelection>>('selectionRef');

    // 图片输入
    readonly src = input.required<string>();
    readonly alt = input<string>('');
    readonly height = input<string>('360px');
    readonly customClass = input<string>('');

    // 画布与控制参数
    readonly background = input<boolean>(true);
    readonly disabled = input<boolean>(false);
    readonly scaleStep = input<number>(0.1);
    readonly themeColor = input<string>('var(--ion-color-primary, #3880ff)');

    // 图像变换参数
    readonly rotatable = input<boolean>(true);
    readonly scalable = input<boolean>(true);
    readonly skewable = input<boolean>(true);
    readonly translatable = input<boolean>(true);
    readonly initialFit = input<CropperFitType>('contain');

    // 裁剪区选框参数
    readonly aspectRatio = input<number | undefined>(undefined);
    readonly initialAspectRatio = input<number | undefined>(undefined);
    readonly initialCoverage = input<number>(0.8);
    readonly movable = input<boolean>(true);
    readonly resizable = input<boolean>(true);
    readonly zoomable = input<boolean>(true);
    readonly keyboard = input<boolean>(true);
    readonly outlined = input<boolean>(true);
    readonly precise = input<boolean>(false);
    readonly dynamic = input<boolean>(false);

    // 辅助元素显隐
    readonly showShade = input<boolean>(true);
    readonly showGrid = input<boolean>(true);
    readonly showCrosshair = input<boolean>(true);

    // 状态 Signal
    readonly isReady = signal<boolean>(false);
    readonly cropData = signal<CropperCropData | null>(null);
    readonly rotation = signal<number>(0);
    readonly scaleX = signal<number>(1);
    readonly scaleY = signal<number>(1);

    // 事件 Output
    readonly cropperReady = output<CropperElements>();
    readonly cropChange = output<CropperCropData>();
    readonly actionStart = output<CustomEvent>();
    readonly action = output<CustomEvent>();
    readonly actionEnd = output<CustomEvent>();
    readonly imageTransform = output<CustomEvent>();

    private listeners: Array<{ target: EventTarget; type: string; listener: EventListener }> = [];

    ngAfterViewInit(): void {
        this.initCropper();
    }

    ngOnDestroy(): void {
        this.destroyListeners();
    }

    private initCropper(): void {
        const canvas = this.canvasRef()?.nativeElement;
        const image = this.imageRef()?.nativeElement;
        const selection = this.selectionRef()?.nativeElement;

        if (!canvas || !image || !selection) return;

        this.bindEvents(canvas, image, selection);

        this.ngZone.run(() => {
            this.isReady.set(true);
            this.cropperReady.emit({ canvas, image, selection });
        });
    }

    private addEventListener(target: EventTarget, type: string, listener: EventListener): void {
        target.addEventListener(type, listener);
        this.listeners.push({ target, type, listener });
    }

    private bindEvents(canvas: CropperCanvas, image: CropperImage, selection: CropperSelection): void {
        // 监听选框变化
        this.addEventListener(selection, 'change', () => {
            const data: CropperCropData = {
                x: selection.x,
                y: selection.y,
                width: selection.width,
                height: selection.height,
                aspectRatio: selection.aspectRatio,
            };
            this.ngZone.run(() => {
                this.cropData.set(data);
                this.cropChange.emit(data);
            });
        });

        // 监听画布动作
        this.addEventListener(canvas, 'actionstart', (e) => {
            this.ngZone.run(() => this.actionStart.emit(e as CustomEvent));
        });

        this.addEventListener(canvas, 'action', (e) => {
            this.ngZone.run(() => this.action.emit(e as CustomEvent));
        });

        this.addEventListener(canvas, 'actionend', (e) => {
            this.ngZone.run(() => this.actionEnd.emit(e as CustomEvent));
        });

        // 监听图像变换
        this.addEventListener(image, 'transform', (e) => {
            this.ngZone.run(() => this.imageTransform.emit(e as CustomEvent));
        });
    }

    private destroyListeners(): void {
        for (const { target, type, listener } of this.listeners) {
            target.removeEventListener(type, listener);
        }
        this.listeners = [];
    }

    // ==================== 公共操作 API ====================

    /** 获取原生 Cropper 元素引用 */
    getCropperCanvas(): CropperCanvas | undefined {
        return this.canvasRef()?.nativeElement;
    }

    getCropperImage(): CropperImage | undefined {
        return this.imageRef()?.nativeElement;
    }

    getCropperSelection(): CropperSelection | undefined {
        return this.selectionRef()?.nativeElement;
    }

    /** 导出裁剪后的 HTMLCanvasElement */
    async getCroppedCanvas(options?: CropperCropOptions): Promise<HTMLCanvasElement | null> {
        const selection = this.selectionRef()?.nativeElement;
        if (!selection || typeof selection.$toCanvas !== 'function') {
            return null;
        }
        return selection.$toCanvas(options);
    }

    /** 导出裁剪后的 Blob 对象 */
    async getCroppedBlob(type = 'image/png', quality = 0.92, options?: CropperCropOptions): Promise<Blob | null> {
        const canvas = await this.getCroppedCanvas(options);
        if (!canvas) return null;

        return new Promise<Blob | null>((resolve) => {
            canvas.toBlob((blob) => resolve(blob), type, quality);
        });
    }

    /** 导出裁剪后的 DataURL (Base64) 字符串 */
    async getCroppedDataUrl(type = 'image/png', quality = 0.92, options?: CropperCropOptions): Promise<string | null> {
        const canvas = await this.getCroppedCanvas(options);
        return canvas ? canvas.toDataURL(type, quality) : null;
    }

    /** 导出裁剪后的 File 对象 */
    async getCroppedFile(filename = 'cropped-image.png', type = 'image/png', quality = 0.92, options?: CropperCropOptions): Promise<File | null> {
        const blob = await this.getCroppedBlob(type, quality, options);
        if (!blob) return null;
        return new File([blob], filename, { type: blob.type });
    }

    /** 旋转图像（角度） */
    rotate(degree: number): void {
        const image = this.imageRef()?.nativeElement;
        if (!image) return;
        image.$rotate(degree);
        this.rotation.update((r) => r + degree);
    }

    /** 缩放图像 */
    scale(scaleX: number, scaleY?: number): void {
        const image = this.imageRef()?.nativeElement;
        if (!image) return;
        image.$scale(scaleX, scaleY);
        this.scaleX.set(scaleX);
        if (scaleY !== undefined) {
            this.scaleY.set(scaleY);
        }
    }

    /** 缩放放大/缩小 */
    zoom(ratio: number): void {
        const image = this.imageRef()?.nativeElement;
        image?.$zoom(ratio);
    }

    /** 居中图像 */
    center(type: CropperFitType = 'contain'): void {
        const image = this.imageRef()?.nativeElement;
        image?.$center(type);
    }

    /** 动态改变裁剪区比例 */
    setAspectRatio(aspectRatio: number): void {
        const selection = this.selectionRef()?.nativeElement;
        if (selection) {
            selection.aspectRatio = aspectRatio;
        }
    }

    /** 设置画布交互模式 ('select' | 'move' | 'transform' | 'none') */
    setAction(action: CropperActionType): void {
        const canvas = this.canvasRef()?.nativeElement;
        canvas?.$setAction(action);
    }

    /** 重置所有变换与选框 */
    reset(): void {
        const image = this.imageRef()?.nativeElement;
        const selection = this.selectionRef()?.nativeElement;
        image?.$resetTransform();
        selection?.$reset();
        this.rotation.set(0);
        this.scaleX.set(1);
        this.scaleY.set(1);
    }
}
