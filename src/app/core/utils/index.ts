import { env } from '@/environments';

export class Utils {
    public static debug(text: string): void {
        if (!env.production) {
            console.log(text);
        }
    }
}
