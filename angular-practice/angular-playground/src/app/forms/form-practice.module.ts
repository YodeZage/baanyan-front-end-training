import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPracticeRoutingModule } from './forms-practice-routing.module';

import {
  ReactiveFormComponent,
  TemplateFormComponent
} from './components';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormPracticeRoutingModule,
    FormsModule
  ],
  exports: [
    ReactiveFormComponent,
    TemplateFormComponent
  ]
})
export class FormPracticeModule { }
