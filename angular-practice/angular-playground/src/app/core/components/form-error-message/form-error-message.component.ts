import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

enum errorMessages {
  required = 'Required.',
  minlength = 'Please enter at least 2 letters.',
  validatePattern = 'Please enter letters and spaces only.',
  validateNoSpaceBothEnd = 'Please don\'t enter space before or after.',
}

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.css']
})
export class FormErrorMessageComponent implements OnInit {

  @Input() fieldControl: FormControl;

  errorMessages: string;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  hasError(): boolean {
    if (this.fieldControl && this.fieldControl.invalid && this.fieldControl.touched) {
      this.updateErrorMessage();
      return true;
    } else {
      return false;
    }
  }

  updateErrorMessage(): void {
    const errorList = this.fieldControl.errors;

    if (errorList.required) {
      this.errorMessages = errorMessages.required;
      return;
    }
    if (errorList.minlength) {
      this.errorMessages = errorMessages.minlength;
      return;
    }
    if (errorList.validateNoSpaceBothEnd) {
      this.errorMessages = errorMessages.validateNoSpaceBothEnd;
      return;
    }
    if (errorList.validatePattern) {
      this.errorMessages = errorMessages.validatePattern;
      return;
    }
  }

}
