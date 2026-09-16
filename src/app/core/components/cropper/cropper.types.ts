import type {
    CropperCanvas,
    CropperCrosshair,
    CropperGrid,
    CropperHandle,
    CropperImage,
    CropperSelection,
    CropperShade,
    CropperViewer,
} from 'cropperjs';

export type { CropperCanvas, CropperCrosshair, CropperGrid, CropperHandle, CropperImage, CropperSelection, CropperShade, CropperViewer };

export interface CropperCropOptions {
    width?: number;
    height?: number;
    beforeDraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
}

export interface CropperCropData {
    x: number;
    y: number;
    width: number;
    height: number;
    aspectRatio?: number;
}

export interface CropperElements {
    canvas: CropperCanvas;
    image: CropperImage;
    selection: CropperSelection;
}

export type CropperFitType = 'contain' | 'cover' | 'none';

export type CropperActionType = 'select' | 'move' | 'transform' | 'none';
