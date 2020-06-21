import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './core/services/message.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  messages: string;
  messageSubscription: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = undefined;
    this.messageSubscription = this.messageService.messageChanged$.subscribe((message) => {
      console.log("I am from app, and message is: " + message);
    });
  }

  valueChanged(aValue: string): void {
    this.messages = aValue;
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

}
