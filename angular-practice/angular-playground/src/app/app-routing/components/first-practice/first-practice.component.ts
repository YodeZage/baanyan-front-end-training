import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-practice',
  templateUrl: './first-practice.component.html',
  styleUrls: ['./first-practice.component.css']
})
export class FirstPracticeComponent implements OnInit {

  name: string;

  // messages: string;
  // messageSubscription: Subscription;
  // isShow: boolean;
  // optionList: any[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.name = 'Angular';
    // this.messages = undefined;
    // this.isShow = false;
    // this.optionList = [
    //   { name: 'Option 1', value: 1 },
    //   { name: 'Option 2', value: 2 },
    //   { name: 'Option 3', value: 3 },
    //   { name: 'Option 4', value: 4 }
    // ];
    // this.messageSubscription = this.messageService.messageChanged$.subscribe((message) => {
    //   console.log("I am from app, and message is: " + message);
    // });
  }

  // valueChanged(aValue: string): void {
  //   this.messages = aValue;
  // }

  // toggleBox(): void {
  //   this.isShow = !this.isShow;
  // }

  ngOnDestroy(): void {
    // this.messageSubscription.unsubscribe();
  }

}
