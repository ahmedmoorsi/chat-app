import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { IChat, IChatModel } from './model/chat.model';
import { ChatService } from './service/chat.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chat-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chat-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chat-app app is running!');
  });

  let component: ChatComponent;
  let service: ChatService;
  let spy: any;

  beforeEach(() => {
      //service = new AuthService();
      //component = new LoginComponent(service);
      
  });

  afterEach(() => {
      //service = null;
      //component = null;
  });


  it('needsLogin returns true when the user has not been authenticated', () => {
      //spy = spyOn(service, 'getMessage').and.returnValue(Observable<IChatModel[]>);
      expect(component).toBeTruthy();
      expect(service.getMessage).toHaveBeenCalled();
  })


  
});
