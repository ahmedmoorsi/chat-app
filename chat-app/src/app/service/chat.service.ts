import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';
import {IChat, IChatModel } from '../model/chat.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {

  constructor(private httpClient: HttpClient) { }


ngOnInit(){
 
}

sendMessage(ichat:IChat): void{

  const headers = { 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json' };
  const body = ichat;
  try {
    this.httpClient.post<IChat>('https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage/', body, { headers })
  .subscribe(data => {
      console.log(data);
  });
  } catch (error) {
    console.log(error);
  }
  
  
  }
getMessage() : Observable<IChat[]> {
  return this.httpClient
    .get<IChat[]>("https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=Mystic-1-4-U");
}

}
