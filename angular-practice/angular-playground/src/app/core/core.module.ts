import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    FormErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    FormErrorMessageComponent
  ]
})
export class CoreModule { }
