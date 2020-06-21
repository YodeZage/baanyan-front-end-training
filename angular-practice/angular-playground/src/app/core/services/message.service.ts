import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageUpdate = new Subject<string>();

  messageChanged$ = this.messageUpdate.asObservable();

  constructor() { }

  updatingMessage(aMessage: string): void {
    this.messageUpdate.next(aMessage);
  }

}
