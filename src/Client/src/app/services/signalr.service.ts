import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class SignalRService {
  private hubConnection: signalR.HubConnection | null = null;

  connect() {
    if (this.hubConnection) return;
    // In local dev/CI the server runs on port 5000 while the client is served on 4200.
    const hubUrl = (window.location.port === '4200') ? 'http://localhost:5000/hub/chat' : '/hub/chat';
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start().catch(err => console.error('SignalR error', err));
  }

  on(method: string, callback: (...args: any[]) => void) {
    this.hubConnection?.on(method, callback);
  }

  invoke(method: string, ...args: any[]) {
    return this.hubConnection ? this.hubConnection.invoke(method, ...args) : Promise.reject('not connected');
  }
}
