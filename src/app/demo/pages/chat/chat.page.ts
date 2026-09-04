import { Chat } from '@ai-sdk/angular';
import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonSpinner,
    IonTitle,
    IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chatbubbleEllipsesOutline, sendOutline, stopCircleOutline } from 'ionicons/icons';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.css'],
    imports: [
        NgClass,
        JsonPipe,
        ReactiveFormsModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonFooter,
        IonButton,
        IonIcon,
        IonInput,
        IonSpinner,
    ],
})
export class ChatPage {
    public chat: Chat = new Chat({});
    private fb: FormBuilder = inject(FormBuilder);
    protected chatForm: FormGroup;

    constructor() {
        addIcons({ chatbubbleEllipsesOutline, sendOutline, stopCircleOutline });
        this.chatForm = this.fb.group({
            userInput: ['', Validators.required],
        });
    }

    async sendMessage(): Promise<void> {
        if (this.chatForm.invalid) {
            return;
        }

        const userInput = this.chatForm.value.userInput;
        this.chatForm.reset();

        this.chat
            .sendMessage(
                {
                    text: userInput,
                },
                {
                    body: {
                        selectedModel: 'gpt-4.1',
                    },
                },
            )
            .then();
    }
}
