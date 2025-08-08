import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  imports: [CommonModule, FormsModule
  ],
  standalone: true,
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent {
  isOpen = false;
  userInput = '';
  messages: { from: 'user' | 'bot', text: string }[] = [];
  constructor(private chatService: ChatService) {

  }
  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.chatService.getMessages('2', this.userInput).subscribe(

      (message: any) => {

        this.messages.push({ from: 'bot', text: message.reply });
      },
      (error: Error) => {
        console.error('Error al enviar el mensaje:', error);
        this.messages.push({ from: 'bot', text: 'Error al enviar el mensaje.' });
      }
    )
    this.messages.push({ from: 'user', text: this.userInput });


    this.userInput = '';
  }


}
