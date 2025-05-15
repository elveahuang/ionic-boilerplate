import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, IonIcon],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, IonIcon],
})
export class SharedModule {}
