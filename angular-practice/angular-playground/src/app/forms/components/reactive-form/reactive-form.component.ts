import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormValidators } from '../../../core/form-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  readonly superPowerList: string[] = [
    'Super fast', 'Super flexible',
    'Super rich', 'Super hot'
  ];

  heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createHeroForm();
  }

  submitHeroForm(): void {
    if (this.heroForm.valid) {
      console.log(this.heroForm);
    } else {
      console.log('Form is NOT submitted!');
    }
  }

  private createHeroForm(): void {
    this.heroForm = this.formBuilder.group({
      username: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(2),
          FormValidators.Username()
        ]
      }],
      age: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      superPower: [this.superPowerList[2], {
        updateOn: 'blur'
      }]
    });
  }
}
