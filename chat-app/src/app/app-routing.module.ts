import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path : 'chat',
    pathMatch:'prefix',
    component:ChatComponent,
    // children:[
    //   {
    //     path:':id', 
    //     pathMatch:'full',
    //     component:UserComponent,      
    //   }
    // ]
  }
  ,
  {
    path:'register',
    pathMatch:'full',
    component: RegisterComponent
  }
  ,
  {
    path:'conversation',
    pathMatch:'full',
    component: ConversationComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
