import { CoreModule } from '@/app/core/core.module';
import { CoreService } from '@/app/core/services/core.service';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [CoreModule],
    templateUrl: './app.component.html',
    standalone: true,
})
export class AppComponent implements OnInit {
    public injector: EnvironmentInjector = inject(EnvironmentInjector);

    constructor(private coreService: CoreService) {
        void this.coreService.init().then();
    }

    ngOnInit(): void {
        void this.coreService.init().then();
        this.coreService.ready().subscribe((ready: boolean): void => {
            console.log(`ready...${ready}`);
        });
    }
}
