import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    ToastController,
} from '@ionic/angular';
import { injectVirtualizer } from '@tanstack/angular-virtual';
import { addIcons } from 'ionicons';
import { arrowDown, arrowUp, bookmark, bookmarkOutline, search, shuffle } from 'ionicons/icons';

interface VirtualItem {
    id: number;
    title: string;
    description: string;
    category: string;
    badgeColor: string;
    time: string;
    isBookmarked: boolean;
}

@Component({
    selector: 'app-virtual-scroller',
    standalone: true,
    templateUrl: 'virtual-scroller.page.html',
    styleUrls: ['virtual-scroller.page.scss'],
    imports: [
        FormsModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonSearchbar,
        IonButton,
        IonButtons,
        IonIcon,
        IonItem,
        IonLabel,
        IonNote,
        IonBadge,
        IonChip,
    ],
})
export class VirtualScrollerPage {
    private toastCtrl = inject(ToastController);

    readonly scrollContainerRef = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

    // 搜索关键词 Signal
    readonly searchKeyword = signal<string>('');

    // 选中分类过滤
    readonly selectedCategory = signal<string>('ALL');

    // 基础生成的数据列表
    private readonly rawItems = this.generateDataset(10000);
    readonly items = signal<VirtualItem[]>(this.rawItems);

    // 过滤后的列表数据
    readonly filteredItems = computed(() => {
        const keyword = this.searchKeyword().trim().toLowerCase();
        const category = this.selectedCategory();

        return this.items().filter((item) => {
            const matchKeyword = !keyword || item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
            const matchCategory = category === 'ALL' || item.category === category;
            return matchKeyword && matchCategory;
        });
    });

    // TanStack Virtualizer 实例
    readonly virtualizer = injectVirtualizer(() => ({
        count: this.filteredItems().length,
        scrollElement: this.scrollContainerRef(),
        estimateSize: () => 76,
        overscan: 10,
    }));

    constructor() {
        addIcons({ arrowUp, arrowDown, shuffle, bookmark, bookmarkOutline, search });
    }

    private generateDataset(count: number): VirtualItem[] {
        const categories = ['Tech', 'Design', 'Product', 'Ops', 'AI'];
        const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning'];

        return Array.from({ length: count }, (_, i) => {
            const catIndex = i % categories.length;
            return {
                id: i + 1,
                title: `Item #${i + 1} - High Performance Virtual Scroll`,
                description: `This is a virtualized record #${i + 1} rendered smoothly with TanStack Angular Virtual.`,
                category: categories[catIndex],
                badgeColor: colors[catIndex],
                time: `${(i % 12) + 1}小时前`,
                isBookmarked: false,
            };
        });
    }

    onSearchChange(event: any): void {
        const value = event.detail.value ?? '';
        this.searchKeyword.set(value);
    }

    setCategory(category: string): void {
        this.selectedCategory.set(category);
    }

    scrollToTop(): void {
        this.virtualizer.scrollToIndex(0, { align: 'start', behavior: 'smooth' });
    }

    scrollToBottom(): void {
        const total = this.filteredItems().length;
        if (total > 0) {
            this.virtualizer.scrollToIndex(total - 1, { align: 'end', behavior: 'smooth' });
        }
    }

    scrollToRandom(): void {
        const total = this.filteredItems().length;
        if (total > 0) {
            const randomIndex = Math.floor(Math.random() * total);
            this.virtualizer.scrollToIndex(randomIndex, { align: 'center', behavior: 'smooth' });
            this.showToast(`已跳转至第 #${randomIndex + 1} 条`);
        }
    }

    toggleBookmark(item: VirtualItem, event: Event): void {
        event.stopPropagation();
        this.items.update((list) =>
            list.map((it) => (it.id === item.id ? { ...it, isBookmarked: !it.isBookmarked } : it)),
        );
    }

    async onItemClick(item: VirtualItem): Promise<void> {
        await this.showToast(`点击了 #${item.id}: ${item.title}`);
    }

    private async showToast(message: string): Promise<void> {
        const toast = await this.toastCtrl.create({
            message,
            duration: 1500,
            position: 'bottom',
        });
        await toast.present();
    }
}
