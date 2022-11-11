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
       "timestamp":"2022-01-20T20:49:51.495Z",
       "chatRoom":"Mystic-1-4-U",
       "message":"hello this is brad in class 2022-01-20",
       "screenName":"Alex Test Data"
    },
    {
       "message":"hello this is brad in class 2022-01-20",
       "screenName":"bradmoon",
       "timestamp":"2022-01-20T20:49:51.495Z",
       "chatRoom":"Mystic-1-4-U"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2022-01-20T20:49:51.495Z",
       "screenName":"Alex Test Data",
       "message":"hello this is brad in class 2022-01-20"
    },
    {
       "screenName":"bradmoon",
       "chatRoom":"Mystic-1-4-U",
       "message":"more messages from brad hello this is brad in class 2021-09-27",
       "timestamp":"2021-10-04T20:49:51.495Z"
    },
    {
       "message":"kim",
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T18:45:11.673Z",
       "screenName":"xyz"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T18:06:02.273Z",
       "message":"hey ",
       "screenName":"test User"
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
       "message":"hey there how are you?",
       "timestamp":"2021-10-04T03:46:09.965Z",
       "screenName":"test12345"
    },
    {
       "message":"Go ahead",
       "timestamp":"2021-10-04T03:45:18.459Z",
       "chatRoom":"Mystic-1-4-U",
       "screenName":"test12345"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "screenName":"test12345",
       "message":"okayyy",
       "timestamp":"2021-10-04T03:45:01.294Z"
    },
    {
       "timestamp":"2021-10-04T03:42:29.783Z",
       "message":"test message 6",
       "screenName":"test12345",
       "chatRoom":"Mystic-1-4-U"
    },
    {
       "message":"test message 5",
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T03:25:39.935Z",
       "screenName":"test12345"
    },
    {
       "chatRoom":"Mystic-1-4-U",
       "timestamp":"2021-10-04T03:25:39.935Z",
       "screenName":"test12345",
       "message":"test message 5"
    },
    {
       "timestamp":"2021-10-04T03:12:58.674Z",
       "message":"who is this",
       "chatRoom":"Mystic-1-4-U",
       "screenName":"TEST -JO"
    },
    {
       "screenName":"anotherUSerrrr",
       "timestamp":"2021-10-04T03:10:04.938Z",
       "message":"hello this is a test from a team #4",
       "chatRoom":"Mystic-1-4-U"
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