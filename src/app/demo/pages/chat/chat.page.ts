import { Chat } from '@ai-sdk/angular';
import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.css'],
    imports: [NgClass, JsonPipe, ReactiveFormsModule],
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
