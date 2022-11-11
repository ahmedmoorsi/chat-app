import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IChat } from '../model/chat.model';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: IChat[] = [];
  error: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.messages = this.chatService.getMessage();
  }

  public sendMessage(): void {
    if (this.message === '' || this.message === undefined) {
      this.error = 'Please enter a message';
      return;
    }

    console.log(`Message: ${this.message}`);

    this.messages.push({
      message: this.message,
      timestamp: new Date().toISOString(),
      chatRoom: "string",
      screenName: "string"
    });

    console.log({ msgObj: this.messages });
  }
  
}
