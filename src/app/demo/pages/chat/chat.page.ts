import { CoreModule } from '@/app/core/core.module';
import { Chat } from '@ai-sdk/angular';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.scss'],
    imports: [CommonModule, CoreModule],
})
export class ChatPage {
    public chat: Chat = new Chat({});
    private fb: FormBuilder = inject(FormBuilder);
    protected chatForm: FormGroup;

    constructor() {
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
