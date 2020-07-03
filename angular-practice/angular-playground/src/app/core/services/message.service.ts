import { Injectable, Inject } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private serverSideData: string;
  private messageUpdate = new Subject<string>();

  messageChanged$ = this.messageUpdate.asObservable();

  constructor() {
    this.serverSideData = 'Hello, ';
  }

  updatingMessage(aMessage: string): void {
    this.messageUpdate.next(aMessage);
  }

  getServerData(aInput: string): Observable<any> {
    // return this.httpClient.get('google.com');
    return of(this.serverSideData + aInput);
  }

}
