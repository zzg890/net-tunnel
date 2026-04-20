import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  constructor(private signalR: SignalRService) { }

  ngOnInit(): void {
    this.signalR.connect();
    this.signalR.on('ReceiveMessage', (user: string, message: string) => {
      this.messages.push(`${user}: ${message}`);
    });
  }

  send() {
    this.signalR.invoke('SendMessage', 'client', 'hello from client').catch(console.error);
  }
}
