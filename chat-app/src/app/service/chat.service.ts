import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {IChat, IChatModel } from '../model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  constructor(private httpClient: HttpClient) { }


ngOnInit(){
 
}

getMessage() :any{
  return this.httpClient.get<IChat[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U").subscribe(data=> {
    console.log(data);
   return data;
 })
}

}
