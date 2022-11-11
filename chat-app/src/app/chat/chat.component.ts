import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IChat } from '../model/chat.model';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('titleInput')
  titleInputReference!: ElementRef;

  @ViewChild('groupTitle')
  titleSelectReference!: ElementRef;

  message: string = '';
  messages: IChat[] = [];
  error: string = '';

  //screenName:string =  this.titleInputReference.nativeElement.value;
  //chatRoom:string =  this.titleSelectReference.nativeElement.value;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((data: IChat[]) => {
      this.messages = data;
    });
  }

  public sendMessage(): void {
    if (this.message === '' || this.message === undefined) {
      this.error = 'Please enter a message';
      return;
    }
    // console.log(this.titleInputReference.nativeElement.value);
    // console.log(this.titleSelectReference.nativeElement.value);
    
    console.log(`Message: ${this.message}`);
    const messageBody = {
      message: this.message,
      timestamp: new Date().toISOString(),
      chatRoom: "Mystic-1-4-U",
      screenName: "Team 2 / MoreC"
    }


    try {
      this.chatService.sendMessage(messageBody);
      
    } catch (error) {
      //console.log('post error', error)
    }
    
    // .subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   console.log(data);
    // });

   

    //console.log({ msgObj: this.messages });
  }
  
}
