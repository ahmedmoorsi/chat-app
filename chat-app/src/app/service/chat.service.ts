import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {IChat, IChatModel } from '../model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  constructor(private httpClient: HttpClient) { }


ngOnInit(){
 
}

getMessage() : Observable<IChat[]> {
  return this.httpClient
    .get<IChat[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U");
}

}
