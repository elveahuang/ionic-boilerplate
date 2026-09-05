import { I18nService } from '@/app/core/services/i18n.service';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { TOptions } from 'i18next';

@Pipe({
    name: 'i18n',
    standalone: true,
    pure: false, // 依赖 I18nService.version Signal 变动，确保语言切换时各组件视图即刻重新计算
})
export class I18nPipe implements PipeTransform {
    private i18n = inject(I18nService);

    transform(key: string, options?: TOptions | string): string {
        if (!key) return '';
        return this.i18n.t(key, options);
    }
}
