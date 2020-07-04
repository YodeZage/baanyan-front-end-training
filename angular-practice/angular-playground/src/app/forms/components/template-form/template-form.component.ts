import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  @ViewChild('heroForm') heroForm: ElementRef;

  readonly superPowerList: string[] = [
    'Super fast', 'Super flexible',
    'Super rich', 'Super hot'
  ];

  model = {
    name: 'Bruce Wayne',
    age: 26,
    superName: this.superPowerList[2]
  };

  nameError: string;

  constructor() { }

  onSubmit() {
    if (this.checkNameField()) {
      console.log(this.model);
      console.log(this.heroForm);
    } else {
      console.log('Form is NOT submitted!');
    }
  }

  checkNameField(): boolean {
    const namePattern = /^[a-z\sA-Z]*$/;
    const minLength = /.{2,}/;

    if (!namePattern.test(this.model.name)) {
      this.nameError = 'Full name must contains letters and space only.';
      return false;
    }

    if (!minLength.test(this.model.name)) {
      this.nameError = 'Full name should more than two letters.';
      return false;
    }

    this.nameError = undefined;
    return true;
  }

}
