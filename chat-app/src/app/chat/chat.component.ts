import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IChat } from '../model/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messages: IChat[] = messages;
  error: string = '';

  constructor() { }

  ngOnInit(): void {
    
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

const messages: IChat[] = [
    {
       "message":"hello this is brad in class 2022-11-11",
       "timestamp":"2022-11-11T20:49:51.495Z",
       "chatRoom":"Mystic-1-4-U",
       "screenName":"bradmoon"
    },
    {
       "screenName":"Alex",
       "timestamp":"2022-01-20T21:26:59.709Z",
       "message":"Hy",
       "chatRoom":"Mystic-1-4-U"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2022-01-20T20:49:51.495Z",
       "message":"Hello world",
       "screenName":"Hamid"
    },
    {
       "message":"I am batman.",
       "timestamp":"2021-10-04T16:56:17.773Z",
       "chatRoom":"Mystic-1-4-U",
       "screenName":"Henok"
    },
    {
       "message":"Hi",
       "screenName":"Henok",
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T16:54:43.419Z"
    },
    {
       "timestamp":"2021-10-04T16:51:20.083Z",
       "screenName":"Henok",
       "message":"Hello",
       "chatRoom":"Mystic-1-4-U"
    },
    {
       "screenName":"TEST -JO",
       "timestamp":"2021-10-04T15:29:21.452Z",
       "chatRoom":"Mystic-1-4-U",
       "message":"heyy agiain"
    },
    {
       "message":"heyyyyy",
       "chatRoom":"Mystic-1-4-U",
       "screenName":"TEST -JO",
       "timestamp":"2021-10-04T15:24:51.553Z"
    },
    {
       "screenName":"TEST -JO",
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T15:23:43.931Z",
       "message":"heyy"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T03:09:34.703Z",
       "screenName":"anotherUSerrrr",
       "message":"hello this is a test from a team #4"
    },
    {
       "screenName":"ddf",
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-03T21:11:58.167Z",
       "message":"one last message"
    }
 ];