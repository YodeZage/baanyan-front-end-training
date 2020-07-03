import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';

import { MessageService } from '../../core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class FetchDataResolver implements Resolve<any> {

  private inputData: string;

  constructor(private router: Router, private messageService: MessageService) {
    this.inputData = "Hello, World!";
  }

  resolve(): Observable<any> {

    if (this.inputData) {
      return this.messageService.getServerData('Angular');
      // return of(this.inputData);
    } else {
      this.router.navigate(['/first-practice']);
      return EMPTY;
    }

  }
}
