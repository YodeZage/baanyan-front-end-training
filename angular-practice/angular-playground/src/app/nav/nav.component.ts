import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public readonly buttonName: string = 'Clean';

  @Input() message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  cleanMessage(): void {
    this.messageService.updatingMessage('I am default message.');
  }

}
