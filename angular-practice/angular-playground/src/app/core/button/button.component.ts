import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  defaultValue: string;

  @Input() displayName: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.displayName || this.displayName === '') {
      this.defaultValue = 'Click Me';
    } else {
      this.defaultValue = this.displayName;
    }
  }

}
