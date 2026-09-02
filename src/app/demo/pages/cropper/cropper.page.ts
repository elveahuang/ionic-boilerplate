import { CROPPER_DIRECTIVES, CropperComponent, CropperCropData } from '@/app/core/components/cropper';
import { DecimalPipe } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
    selector: 'app-demo-cropper',
    standalone: true,
    templateUrl: 'cropper.page.html',
    styleUrls: ['cropper.page.css'],
    imports: [
        DecimalPipe,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        ...CROPPER_DIRECTIVES,
    ],
})
export class CropperPage {
    readonly cropperRef = viewChild<CropperComponent>('cropperRef');

    readonly sampleImageUrl = 'assets/icon/favicon.png';
    readonly croppedPreview = signal<string | null>(null);
    readonly cropInfo = signal<CropperCropData | null>(null);
    readonly currentAspectRatio = signal<number | undefined>(1);

    onCropChange(data: CropperCropData): void {
        this.cropInfo.set(data);
    }

    async generateCrop(): Promise<void> {
        const cropper = this.cropperRef();
        if (!cropper) return;

        const dataUrl = await cropper.getCroppedDataUrl('image/png');
        this.croppedPreview.set(dataUrl);
    }

    onRotate(degree: number): void {
        this.cropperRef()?.rotate(degree);
    }

    onZoom(ratio: number): void {
        this.cropperRef()?.zoom(ratio);
    }

    onReset(): void {
        this.cropperRef()?.reset();
        this.croppedPreview.set(null);
    }

    setRatio(ratio: number | undefined): void {
        this.currentAspectRatio.set(ratio);
        if (ratio !== undefined) {
            this.cropperRef()?.setAspectRatio(ratio);
        }
    }
}
