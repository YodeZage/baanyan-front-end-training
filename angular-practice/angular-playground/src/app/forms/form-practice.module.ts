import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPracticeRoutingModule } from './forms-practice-routing.module';
import { CoreModule } from '../core/core.module';

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
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    ReactiveFormComponent,
    TemplateFormComponent
  ]
})
export class FormPracticeModule { }
